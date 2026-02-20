"use client";

import { useState } from "react";
import { MAX_POST_LENGTH } from "@/lib/constants";

interface CreatePostFormProps {
  onSubmit: (content: string) => Promise<void>;
}

/** Form for creating a new on-chain post. */
export function CreatePostForm({ onSubmit }: CreatePostFormProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = content.trim();
    if (!trimmed) return;
    if (trimmed.length > MAX_POST_LENGTH) {
      setError(`Post must be ${MAX_POST_LENGTH} characters or less.`);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      await onSubmit(trimmed);
      setContent("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-gray-700 bg-gray-900 p-4"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's happening on-chain?"
        maxLength={MAX_POST_LENGTH}
        rows={3}
        className="w-full resize-none rounded-md border border-gray-700 bg-gray-800 p-3 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:outline-none"
      />

      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {content.length}/{MAX_POST_LENGTH}
        </span>

        {error && <span className="text-xs text-red-400">{error}</span>}

        <button
          type="submit"
          disabled={isSubmitting || !content.trim()}
          className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 disabled:opacity-50"
        >
          {isSubmitting ? "Posting…" : "Post"}
        </button>
      </div>
    </form>
  );
}
