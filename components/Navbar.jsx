import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='bg-zinc-200 sahdow-md rounded'>
        <nav className="container mx-auto hfull px-5 py-3 ">
            <Link href="/" >
                <a className="p-2 hover:underline">
                    Home 🏡
                </a>
            </Link>
            <Link href="/task/new">
                <a  className="p-2 hover:underline">
                New task 📝
                </a>
            </Link>
            <Link href="/task/">
                <a  className="p-2 hover:underline">
                    All tasks 📋
                </a>
            </Link>
        </nav>
    </div>
  )
}
