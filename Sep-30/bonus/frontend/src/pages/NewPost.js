import { useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const user = useSelector(state => state.user);

  const post = e => {
    e.preventDefault();
    const postText = inputRef.current.value;
    (async _ => {
      const response = await axios.post("http://localhost:3007/post", {
        post: postText
      }, {
        headers: {
          "Authorization": "Bearer " + user._id
        }
      });
      alert(response.data.message);
      navigate("/");
    })();
  }

  return (
    <>
      <h2>New Post</h2>
      <form onSubmit={post}>
        <textarea placeholder="What's on your Mind" ref={inputRef} />
        <button type="submit">Create Post</button>
      </form>
    </>
  )
}

export default NewPost;