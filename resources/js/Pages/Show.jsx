import { Link } from "@inertiajs/react";
export default function Show({ post }) {
    return (
        <>
            <div className="p-4 flex flex-col border-b border-gray-100">
                <span className="text-gray-500">
                    {new Date(post.created_at).toLocaleString()}
                </span>
                <p href={`/posts/${post.id}`} className="">
                    {post.body}
                </p>
                <Link className="text-link" href={`/posts/${post.id}/edit`}>
                    Edit
                </Link>
            </div>
        </>
    );ß
}
