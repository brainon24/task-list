import React from 'react'

export const Footer = () => {

  let date = new Date();

  return (
    <div>
        <footer className='bg-zinc-200 py-5 text-center'>
            <p className='text-sky-500'><span className='text-black'>&copy; </span>Powered by David Diaz H - {date.getFullYear()}.</p>
            <p>This App is built with NextJS Full Stack · ReactJS · MySQL.</p>
        </footer>
    </div>
  )
}
