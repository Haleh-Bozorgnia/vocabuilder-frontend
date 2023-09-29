import { Link } from "react-router-dom";
import FlipCard from "./Flippcard";

function Post({post}) {
  return (
    <div>
      {/* <Link to={`/post/${post.id}`}>
        <h2>vocab: {post.vocab}</h2>
      </Link> */}

      <FlipCard key={post.id} flip={post} />

      {/* <h3>translation: {post.translation}</h3>
      <h3>type: {post.type}</h3>
      <h3>pronounciation: {post.pronounciation}</h3>
      <br></br> */}
    </div>
  );
}

export default Post;
