import Link from "next/link";

export default function BlogPAge() {
    return (
        <main>
            <h1>The Blog</h1>
            <p><Link href="/blog/post-1">Post1</Link></p>
            <p><Link href="/blog/post-2">Post2</Link></p>
        </main>
    );
};
