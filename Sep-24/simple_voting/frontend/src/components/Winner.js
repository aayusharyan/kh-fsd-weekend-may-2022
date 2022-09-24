const Winner = ({ data, getData }) => {
  console.log(data);
  return (
    <div>
      <button onClick={getData}>Get Result</button>
      {data._id == undefined ? (false) : (
        <>
          <br />
          <p>Candidate {data._id} has won by {data.votes} votes.</p>
        </>
      )}
    </div>
  );
}

export default Winner;