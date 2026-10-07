import React, { useState } from 'react'
import { Emailcontext } from './Emailcontext'


const EmailProvider = ({children}) => {

    const[subject,setSubject] = useState("")
    const[emailbody,setEmailBody] = useState("")
 const [emailList,setEmailList] = useState([])

  return (
    <Emailcontext.Provider value={{subject,setSubject,emailbody,setEmailBody,emailList,setEmailList}}>

        {children}

    </Emailcontext.Provider>
  )
}

export default EmailProvider