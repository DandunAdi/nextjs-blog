import Link from "next/link";

const FirstPost = () => {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Goto Homepage</a>
        </Link>
      </h2>
    </div>
  );
};

export default FirstPost;
