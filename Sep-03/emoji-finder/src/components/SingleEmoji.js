const SingleEmoji = ({ emoji, num }) => {
  console.log(emoji);
  return (
    <tr>
      <td>{num + 1}</td>
      <td style={{fontSize: "150%"}}>{emoji.emoji}</td>
      <td>{emoji.description}</td>
      <td>{emoji.category}</td>
      <td>{emoji.aliases.join(", ")}</td>
    </tr>
  )
}
export default SingleEmoji;