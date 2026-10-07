import React from 'react'
import bulkHero from "./img/bulkhero.jpeg"
 
const Hero = () => {
  return (
   <section className="w-full bg-white px-8 py-10 sm:px-6 lg:px-8 dark:bg-slate-950">
  <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-8 lg:flex-row">

 
    <div className="w-full lg:w-[40%]">
      <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        SIMPLE • FAST • RELIABLE
      </p>

      <h1 className="text-5xl font-bold leading-tight text-slate-900 dark:text-white">
        Send Bulk Emails
        <br />
        <span className="text-blue-600">
          Without Limits
        </span>
      </h1>

      <p className="mt-5 text-lg text-slate-600 dark:text-white">
        Upload your contact list, craft your message and reach
        hundreds in seconds. Effortless, professional and powerful.
      </p>
    </div>


    


    <div className="hidden lg:flex w-full lg:w-[35%]">
      <img
        src={bulkHero}
        alt="Bulk Mail"
        className="w-full h-auto object-contain"
      />
    </div>

  
    <div className="w-full space-y-4 lg:w-[25%]">
      <div className="rounded-2xl bg-green-50 p-5">
        <h3 className="font-bold">Reach Your Audience</h3>
        <p className="text-sm text-gray-500 dark:text-slate-900">
          Connect with hundreds at once
        </p>
      </div>

      <div className="rounded-2xl bg-orange-50 p-5">
        <h3 className="font-bold">Save Time</h3>
        <p className="text-sm text-gray-500 dark:text-slate-900">
          Focus on what matters most
        </p>
      </div>

      <div className="rounded-2xl bg-purple-50 p-5">
        <h3 className="font-bold">Grow Opportunities</h3>
        <p className="text-sm text-gray-500 dark:text-slate-900">
          Turn ideas into real results
        </p>
      </div>
    </div>

  </div>
</section>
  )
}

export default Hero