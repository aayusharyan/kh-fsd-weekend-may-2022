import SinglePost from "./SinglePost";

const PostList = ({list}) => {
  return (
    <>
      <h2>List of posts</h2>
      {list.map((element, index) => {
        return <SinglePost key={index} data={element} />
      })}
    </>
  )
}

export default PostList;