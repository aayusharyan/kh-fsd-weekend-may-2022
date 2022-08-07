const PropsIntro = ({ name, role, interest }) => {
  return <div>
    <h2>Hi, I am {name}</h2>
    <p>I am your {role}</p>
    <p>I like {interest}</p>
  </div>
}

export default PropsIntro;