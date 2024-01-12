import React from 'react'
import Header from '../components/Header/Header';


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UsersPage = async () => {

  const users: User[] = await getUser();

  return (
    <>
      <Header />
      <div className="mt-[27px] px-[200px] py-[11px]">
          <div className='w-full h-full text-center	'>

              <p className='text-[25px] text-[#4D4D4D] font-semibold	heading-[30px]'>Users</p>  
              <p className='text-[12px] text-[#4D4D4D] font-normal	heading-[16px]'>List of users</p>  

              <div className="mt-[10px] overflow-y-auto h-[500px]">
                <table className="table">
                  <thead className='sticky top-0 bg-[#89939E] text-white font-semibold'>
                    <tr>
                      <th className='min-w-0'></th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    users.map((user, key) => 
                    <tr key={user.id} className='hover'>
                      <td className='min-w-0'>{key+1}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        {
                          key%3 == 0 
                            ?
                            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                              Badge
                            </span> 
                            :
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              Active
                            </span>   
                        }
                                           
                      </td>
                    </tr> 
                    )
                  }
                  </tbody>
                </table>
            </div>
          </div>
      </div>
    </>
  )
}

const getUser = async () => {
  const res = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
      cache: 'no-store', //dont store if data changes frequently
      //next: { revalidate: 10 } //fetch data every 10 second
  });
  return await res.json();
}

export default UsersPage