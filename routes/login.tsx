import { PageProps } from "$fresh/server.ts";
import LoginForm from "../islands/LoginForm.tsx";
import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Nav.tsx";

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Fresh Login Page</title>
                <Header activeLink={'login'}/>
            </Head>
            <div className="p-4 mx-auto max-w-screen-md">
                <img
                    src="/logo.svg"
                    className="w-32 h-32"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                />
                <LoginForm/>
            </div>
        </>
    );
}
