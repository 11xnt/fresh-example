import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Header from "../islands/Nav.tsx";

export default function Home() {
  return (
    <>
      <Head>
          <title>Fresh Example App</title>
          <Header activeLink={'home'}/>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `What's On`.
        </p>
          <p>
              this is the updated message
          </p>
        <Counter start={3} />
      </div>
    </>
  );
}
