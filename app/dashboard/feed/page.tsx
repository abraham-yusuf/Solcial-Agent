import { FeedList } from "@/components/organisms/FeedList";
import { fetchFeedPosts } from "../../actions/feed";

/** Feed page — displays latest posts and allows creating new ones. */
export default async function FeedPage() {
  const posts = await fetchFeedPosts();

  const feedData = posts.map((p) => ({
    id: p.id,
    pdaAddress: p.pdaAddress,
    authorWallet: p.authorWallet,
    content: p.content,
    likes: p.likes,
    onchainTimestamp: p.onchainTimestamp,
  }));

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold text-gray-200">Feed</h2>
      <FeedList initialPosts={feedData} />
    </section>
  );
}
