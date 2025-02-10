import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        body: "",        
    });
    console.log(useForm());
    return (
        <div>
            <h1 className="title">Create post</h1>

            {errors.body && <div className="text-red-500">{errors.body}</div>}

            {data.body}

            <div className="w-1/2 mx-auto">
                <form action="">
                    <textarea name="" id="" rows={6} value={data.body} 
                    onChange={(e) => setData('body', e.target.value)} className="w-full border p-2" placeholder="What's on your mind"
                    ></textarea>
                    <button className="primary-btn mt-4">Create Post</button>
                </form>
            </div>
        </div>
    );
}