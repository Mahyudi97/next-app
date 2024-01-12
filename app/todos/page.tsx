import React from 'react'
import Header from '../components/Header/Header';
import { FaPenToSquare, FaMagnifyingGlass  } from "react-icons/fa6";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const TodosPage = async () => {

  const todos: Todo[] = await getTodo();

  return (
    <>
      <Header />
      <div className="mt-[27px] px-[200px] py-[11px]">
          <div className='w-full h-full text-center	'>
              <p className='text-[25px] text-[#4D4D4D] font-semibold	heading-[30px]'>Todos</p>  
              <p className='text-[12px] text-[#4D4D4D] font-normal	heading-[16px]'>List of todos</p>  

              <div className="mt-[10px] overflow-y-auto h-[500px]">
                <table className="table">
                  <thead className='sticky top-0 bg-[#89939E] text-white font-semibold'>
                    <tr>
                      <th className='min-w-0'></th>
                      <th>User Id</th>
                      <th>Title</th>
                      <th>Status</th>
                      <th className='min-w-0'></th>
                      <th className='min-w-0'></th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    todos.map((todo, key) => 
                    <tr key={todo.id} className='hover'>
                        <td className='min-w-0'>{key+1}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>
                            {
                            !todo.completed
                                ?
                                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                Not Complete
                                </span> 
                                :
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                Completed
                                </span>   
                            }
                        </td>
                        <td className='min-w-0'><button><FaPenToSquare  /></button></td>
                        <td className='min-w-0'><button><FaMagnifyingGlass /></button></td>
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

const getTodo = async () => {
  const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
      cache: 'no-store', //dont store if data changes frequently
      //next: { revalidate: 10 } //fetch data every 10 second
  });
  return await res.json();
}

export default TodosPage