import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../islands/Nav.tsx";

const eventItems = [
    {
        title: "Event1",
        when: "today",
    },
    {
        title: "Event2",
        when: "tomorrow",
    },
    {
        title: "Event3",
        when: "next week",
    },
] as const;

export default function Events() {
    return (
        <>
            <Head>
                <title>Fresh Events Page</title>
                <Header activeLink={'events'}/>
            </Head>
            <div className="p-4 mx-auto max-w-screen-md">
                <img
                    src="/logo.svg"
                    className="w-32 h-32"
                    alt="the fresh logo: a sliced lemon dripping with juice"
                />
                <Event/>
            </div>
        </>
    )
}

type EventItemProps = {
    title: string;
    when: string;
};

function Event() {
    return (
        <p>
            {eventItems.map((item) => EventItem({ ...item }))}
        </p>
    );
}

function EventItem({ title, when }: EventItemProps) {
    return (
        <div className="flex gap-2 w-full">
            <ul>{title}</ul>
            <ul>{when}</ul>
            <br/>
        </div>
    );
}