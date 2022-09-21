import { Link } from "@remix-run/react";

export default function IndexPosts() {
  return (
    <section>
      <h1>Posts</h1>
      <ul className="flex flex-col">
        <Link to="first-post">First post</Link>
        <Link to="second-post">Second post</Link>
      </ul>
    </section>
  );
}
