const Stats = ({ data, getData }) => {
  return (
    <div>
      <button onClick={getData}>Get Stats</button>
      <br />
      {data.length == 0 ? (
        <span>No data</span>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Candidate ID</th>
              <th># of Votes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, idx) => {
              return (
                <tr key={idx}>
                  <td>{element._id}</td>
                  <td>{element.votes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );

}

export default Stats;