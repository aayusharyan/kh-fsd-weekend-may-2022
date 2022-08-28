import React from 'react'

const UserDetail = ({ data }) => {
  console.log(data);
  return (
    <div className='user-detail'>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Username</td>
            <td>{data.username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>{data.website}</td>
          </tr>
          <tr>
            <td>Phone No.</td>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserDetail