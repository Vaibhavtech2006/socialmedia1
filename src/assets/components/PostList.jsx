import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(true); // Start with fetching true

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts", { signal });
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        addInitialPosts(data.posts); // Set posts in the context
        setFetching(false); // Stop the spinner once data is available
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching posts:", error);
        }
        setFetching(false); // Stop spinner even if there is an error
      }
    };

    fetchPosts();

    // Cleanup function to abort fetch if the component is unmounted
    return () => {
      controller.abort();
    };
  }, [addInitialPosts]);

  // Show loading spinner while fetching, and display data when available
  return (
    <>
      {fetching ? <LoadingSpinner /> : postList.length === 0 ? <Welcomemessage /> : postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
