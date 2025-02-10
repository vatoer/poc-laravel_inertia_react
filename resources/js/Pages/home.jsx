import { Link } from "@inertiajs/react";

export default function Home({ posts }) {
    console.log(posts);
    return (
        <div>
            <h1 className="title">Hello</h1>
            {posts.map((post) => (
                <div key={post.id} className="p-4 flex flex-col border-b border-gray-100">
                    <Link href={`/posts/${post.id}`} className="text-blue-500">{new Date(post.created_at).toLocaleString()}</Link>
                    <p href={`/posts/${post.id}`} className="">{post.body}</p>
                </div>
            ))}
        </div>
    );
}
