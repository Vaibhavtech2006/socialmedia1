// PostList.jsx
import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../store/post-list-store"; // Named import

const Postlist = () => {
  const { postList } = useContext(PostList);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist; // Default export for PostList component
