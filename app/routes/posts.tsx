import { Outlet } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/server-runtime";
import styles from "highlight.js/styles/github.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function PostsLayoutRoute() {
  return (
    <section className="flex justify-center">
      <article className="prose lg:prose-xl">
        <Outlet></Outlet>
      </article>
    </section>
  );
}
