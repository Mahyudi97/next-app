import React from 'react'


interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: 'no-store', //dont store if data changes frequently
      //next: { revalidate: 10 } //fetch data every 10 second
    });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <div className="overflow-y-auto h-[200px]">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user, key) => 
            <tr key={user.id} className='hover'>
              <td>{key+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr> 
            )
          }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersPage