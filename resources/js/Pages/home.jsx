import { Link, usePage } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy"
import { useState } from "react";

export default function Home({ posts }) {
    const route = useRoute();
    const {flash} = usePage().props;
    console.log(usePage());

    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
    }, 1500);


    return (
        <div>
            <h1 className="title">Hello</h1>
            {flashMsg && <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsg}</div>}
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
