import React, { useContext } from 'react'
import { FiEye } from "react-icons/fi"
import SendEmail from './SendEmail'
import { Emailcontext } from '../usecontext/Emailcontext'

const EmailPreview = () => {

    const { subject, emailbody } = useContext(Emailcontext)

    return (
        <div className='w-full min-w-0 rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900'>

            {/* Header */}
            <div className='flex items-center gap-3'>

                <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white'>
                    <FiEye className='text-xl' />
                </div>

                <div>
                    <p className='text-xl font-bold text-slate-900 dark:text-white'>
                        Email Preview
                    </p>

                    <p className='text-gray-400 dark:text-gray-400'>
                        This is how your email looks to recipients
                    </p>
                </div>

            </div>


            {/* Email Preview Box */}
            <div className='mt-5 w-full min-w-0 rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-800'>

                {/* Browser Top Bar */}
                <div className='w-full rounded-xl bg-gray-200 p-3'>

                    <div className='flex items-center gap-2'>
                        <p className='h-4 w-4 rounded-full bg-red-600'></p>

                        <p className='h-4 w-4 rounded-full bg-orange-600'></p>

                        <p className='h-4 w-4 rounded-full bg-yellow-400'></p>
                    </div>

                </div>


                {/* Subject */}
                <div className='mt-4 w-full min-w-0 border-b-2 border-gray-300 p-2 dark:border-slate-600'>

                    <p className='break-words dark:text-white'>
                        <span className='font-bold dark:text-white'>Subject:</span>{" "}
                        {subject}
                    </p>

                </div>


                {/* Email Body */}
                <div className='mt-4 w-full min-w-0 break-words whitespace-pre-wrap overflow-hidden text-slate-800 dark:text-white'>

                    {emailbody}

                </div>

            </div>


            {/* Send Email */}
            <SendEmail />

        </div>
    )
}

export default EmailPreview