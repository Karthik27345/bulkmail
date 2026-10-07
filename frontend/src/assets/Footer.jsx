import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between m-2 p-5 bg-white w-full items-center rounded-xl shadow-sm dark:bg-slate-800'>

        <p className='text-gray-400'>2026 BulkMail.Made with ❤️ by Karthik V</p>
       <div className='flex text-gray-400 gap-3'>
         <p>Privacy </p>
          <p>Terms</p>
           <p>Feedback</p>
       </div>
    </div>
  )
}

export default Footer