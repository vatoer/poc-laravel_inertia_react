import { Link } from "@inertiajs/react";

export default function Home({name}) {
    return (
        <div>
            <h1 className="title">Hello, {name}</h1>
            <Link preserveScroll  href="/" className="block title mt-[1000px]"> {new Date().toLocaleTimeString() }
            </Link>
        </div>
    );
}
