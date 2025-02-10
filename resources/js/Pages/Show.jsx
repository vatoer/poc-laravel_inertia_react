import { Link, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy"

export default function Show({ post }) {

    const { delete: destroy } = useForm();
    const route = useRoute();


    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', post));
    }

    console.log(useForm());
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

                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 text-slate-100 px-4 py-1  rounded">Delete</button>
                    </form>
                </div>
            </div>
        </>
    );ß
}
