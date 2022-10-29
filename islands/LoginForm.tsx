import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function LoginForm(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <div className="flex gap-2 w-full">
            <form>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
