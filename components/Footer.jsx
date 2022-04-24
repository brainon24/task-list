import React from 'react'

export const Footer = () => {

  let date = new Date().getFullYear();

  return (
    <div>
        <footer className='bg-zinc-200 py-5 text-center'>
            <p className='text-sky-500'><span className='text-black'>&copy; Powered by</span> David Diaz H <span className='text-black'> para </span> brainon24 <span className='text-black'> - </span> {date}.</p>
            <p>This App is built with NextJS Full Stack · ReactJS · MySQL.</p>
        </footer>
    </div>
  )
}
