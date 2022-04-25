import React from 'react'
import Link from 'next/link'
import logoIMG from '../public/logo.png'

export const Navbar = () => {
  return (
    <div className='bg-zinc-200 sahdow-md rounded'>
        <nav className="container mx-auto hfull px-5 py-3 flex justify-between ">
            {/* <Link href="/" >
                <a className="p-2 hover:underline underline-offset-4 hover:decoration-sky-600 mb-3">
                    Home 🏡
                </a>
            </Link> */}
            <div>
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
                <Link href="/task/search">
                    <a  className="p-2 hover:underline underline-offset-4 hover:decoration-sky-600 mb-3">
                        Search 🔎
                    </a>
                </Link>
            </div>
            <img src={logoIMG} alt="" />
        </nav>
    </div>
  )
}
