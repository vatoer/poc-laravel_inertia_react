import { Link } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy"

export default function Home({ posts }) {
    const route = useRoute();
    return (
        <div>
            <h1 className="title">Hello</h1>
            <div>
                {posts.data.map((post) => (
                    <div
                        key={post.id}
                        className="p-4 flex flex-col border-b border-gray-100"
                    >
                        <span
                            className="text-gray-500"
                        >
                            {new Date(post.created_at).toLocaleString()}
                        </span>
                        <p href={`/posts/${post.id}`} className="">
                            {post.body}
                        </p>
                        {/* <Link className="text-link" href={`/posts/${post.id}`}>read more</Link> */}

                        <Link className="text-link" href={route('posts.show',post)}>read more</Link>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                {posts.links.map((link, index) => (
                    link.url &&
                    <Link
                        key={link.label || index}
                        href={link.url}
                        className={`text-blue-500 p-1 mx-1 ${link.active ? 'font-bold' : ''}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                   />
                ))}
            </div>
        </div>
    );
}
