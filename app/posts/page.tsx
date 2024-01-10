
import React from 'react'

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
            <div>PostsPage</div>
            <div className="overflow-y-auto h-[500px]">
                <table className="table">
                <thead>
                    <tr>
                    <th></th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                {
                    posts.map((posts, key) => 
                    <tr key={posts.id} className='hover'>
                    <td>{key+1}</td>
                    <td>{getUserbyId(posts.userId)}</td>
                    <td>{posts.title}</td>
                    <td>{posts.body.slice(0,200)} ...</td>
                    </tr> 
                    )
                }
                </tbody>
                </table>
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
        cache: 'no-store', //dont store if data changes frequently
        //next: { revalidate: 10 } //fetch data every 10 second
    });
    const users: User = await res.json();
    return users.name;
}

export default PostsPage