
import React from 'react'
import Header from '../components/Header/Header';
import { FaPenToSquare, FaMagnifyingGlass  } from "react-icons/fa6";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Posts {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const PostsPage = async () => {

    const posts : Posts[] = await getPost(); 

    return (
        <>
            <Header />
            <div className="mt-[27px] px-[200px] py-[11px]">
                <div className='w-full h-full text-center	'>

                    <p className='text-[25px] text-[#4D4D4D] font-semibold	heading-[30px]'>Posts</p>  
                    <p className='text-[12px] text-[#4D4D4D] font-normal	heading-[16px]'>List of posts by users</p>  

                    <div className="mt-[10px] overflow-y-auto h-[500px]">
                        <table className="table">
                        <thead className='sticky top-0 bg-[#89939E] text-white font-semibold'>
                            <tr>
                                <th className='min-w-0'></th>
                                <th>Title</th>
                                <th>Body</th>
                                <th className='min-w-0'></th>
                                <th className='min-w-0'></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            posts.map((posts, key) => 
                            <tr key={posts.id} className='hover'>
                                <td className='min-w-0'>{key+1}</td>
                                <td>{posts.title}</td>
                                <td>{posts.body.slice(0,200)} ...</td>
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

const getPost = async () => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
        cache: 'no-store', //dont store if data changes frequently
        //next: { revalidate: 10 } //fetch data every 10 second
    });
    return await res.json();
}

//const getUserbyId = async ({ userId }: { userId: number}) => {
const getUserbyId = async ( userId: number) => {

    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users?id="+userId,
        {
        //cache: 'no-store', //dont store if data changes frequently
        next: { revalidate: 0 } //fetch data every 10 second
    });
    const users: User = await res.json();
    return users.name;
}

export default PostsPage