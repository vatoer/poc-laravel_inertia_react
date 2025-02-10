import { useForm,Head } from "@inertiajs/react";
export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/posts");
    }

    console.log(errors);

    return (
        <>
            <Head>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the CREATE description"
                />
            </Head>
            <h1 className="title">Create post</h1>

            {data.body}

            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        name=""
                        id=""
                        rows={6}
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={`${
                            errors.body ? "!ring-red-500" : ""
                        } w-full p-2 border focus:outline-none border-gray-300 rounded`}
                        placeholder="What's on your mind"
                    ></textarea>
                    {errors.body && (
                        <div className="text-red-500">{errors.body}</div>
                    )}
                    <button className="primary-btn mt-4" disabled={processing}>
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
}
