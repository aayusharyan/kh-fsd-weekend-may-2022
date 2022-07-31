class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: []
    };

    fetch('https://reqres.in/api/users').then(response => {
      response.json().then(data => {
        this.setState(_ => {
          return {
            users: data.data
          }
        })
      })
    })
  }

  render() {
    console.log(this.state.users);
    return <div>
      <h2>User List</h2>
      <ul>
        {this.state.users.map((single_user, idx) => {
          return <SingleUser first_name={single_user.first_name} last_name={single_user.last_name} email={single_user.email} key={idx} />
        })}
      </ul>
    </div>
  }
}