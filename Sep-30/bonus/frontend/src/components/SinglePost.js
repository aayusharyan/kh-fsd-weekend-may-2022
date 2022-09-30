import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";

const SinglePost = ({data}) => {

  const [singlePost, setSinglePost] = useState(data);
  const user = useSelector(state => state.user);

  const dislike = () => {
    (async _ => {
      axios.post(`http://localhost:3007/like?post_id=${singlePost._id}&dislike=1`, {}, {
        headers: {
          'Authorization': "Bearer " + user._id
        }
      });
      setSinglePost(state => {
        delete state.likes[user._id];
        return { ...state };
      });
    })()
  }

  const like = () => {
    (async _ => {
      axios.post(`http://localhost:3007/like?post_id=${singlePost._id}`, {}, {
        headers: {
          'Authorization': "Bearer " + user._id
        }
      });
      setSinglePost(state => {
        state.likes[user._id] = true;
        return { ...state };
      })
    })();
  }

  return (
    <div>
      <p>Post by {singlePost.author_name}</p>
      <p>{singlePost.text}</p>
      <p>{Object.keys(singlePost.likes).length} likes</p>
      {Object.keys(singlePost.likes).includes(user._id) ? (
        <button onClick={dislike}>Dislike</button>
      ) : (
        <button onClick={like}>Like</button>
      )}
      <hr />
      <hr />
    </div>
    
  )
}

export default SinglePost;