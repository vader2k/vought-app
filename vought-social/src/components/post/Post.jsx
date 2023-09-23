import { posts } from "../../constants";
import PostIcons from "../postIcons/PostIcons";

const Post = () => {
  return <div className="dark:bg-gray-950">
    {
      posts.map((post) =>
        <PostIcons post={post} key={post.id}/>
      )
    }
  </div>
}

export default Post;