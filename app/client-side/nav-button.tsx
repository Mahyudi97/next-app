"use client"
import { FaAlignJustify } from "react-icons/fa6";

export default function NavButton() {
  return (
    <button className="btn btn-square btn-ghost" onClick={() => alert('hi')}>
        <FaAlignJustify fontSize={23} />
    </button>
  )
}