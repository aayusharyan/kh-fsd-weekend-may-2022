import SingleEmoji from "./SingleEmoji";

const Emojis = ({ data }) => {
  console.log(data);
  return (
    <>
      <h2>Emojis</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Emoji</th>
            <th>Description</th>
            <th>Category</th>
            <th>Aliases</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, idx) => {
            return (
              <SingleEmoji key={idx} emoji={element} num={idx} />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Emojis;