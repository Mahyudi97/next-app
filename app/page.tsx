import Image from 'next/image'
import Link from 'next/link'
import { FaAlignJustify } from "react-icons/fa6";
import NavButton from './client-side/nav-button';

export default function Home() {
  
  return (
    <main> 
      <div className="navbar bg-base-100 rounded-box">
        <div className="flex-none">
          <NavButton />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-xl">Next App</h1>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <ul className="menu menu-vertical bg-base-200 rounded-box">
        <li className="menu-title">Navigation</li>
        <li><Link href={"/users"}>Users</Link></li>
        <li><Link href={"/posts"}>Posts</Link></li>
        <li><Link href={"/todos"}>Todos</Link></li>
      </ul>
    </main>
  )
}
