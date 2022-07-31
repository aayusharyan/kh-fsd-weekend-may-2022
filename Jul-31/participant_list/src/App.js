class App extends React.Component {
  render() {
    const participants = [
      {first_name: "Ishmael", last_name:"Muhikira"},
      {first_name: "Sam", last_name:"Deuel"},
      {first_name:"Aayush", last_name:"Sinha"},
    ];

    return <div>
      <h2>Participant List</h2>
      <ul>
        {participants.map((element, idx) => {
          return <SingleParticipant first_name={element.first_name} last_name={element.last_name} key={idx} />
        })}
      </ul>
    </div>
  }
}