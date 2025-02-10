import Layout from "../Layouts/Layout";

function Home({name}) {
    return (
        <div>
            <h1 className="title">Hello, {name}</h1>
        </div>
    );
}

Home.layout = page => <Layout children={page} />;

export default Home;