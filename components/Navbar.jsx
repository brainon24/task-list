import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='bg-zinc-200 sahdow-md rounded'>
        <nav className="container mx-auto hfull px-5 py-3 ">
            <Link href="/" >
                <a className="p-2 hover:underline underline-offset-4 hover:decoration-sky-600 mb-3">
                    Home 🏡
                </a>
            </Link>
            <Link href="/task/new">
                <a  className="p-2 hover:underline underline-offset-4 hover:decoration-sky-600 mb-3">
                New task 📝
                </a>
            </Link>
            <Link href="/task/">
                <a  className="p-2 hover:underline underline-offset-4 hover:decoration-sky-600 mb-3">
                    All tasks 📋
                </a>
            </Link>
        </nav>
    </div>
  )
}
