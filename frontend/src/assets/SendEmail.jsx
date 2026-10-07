import { useContext } from "react";
import { FiSettings, FiChevronDown, FiSend } from "react-icons/fi";
import { Emailcontext } from "../usecontext/Emailcontext";
import axios from "axios";
import { useState } from "react";
import {toast} from "react-hot-toast"

function SendEmail() {

  const{subject,emailbody,emailList,setEmailList} = useContext(Emailcontext)
  const[status,setstatus] = useState(false)

  const send = ()=>{

    setstatus(true)
  axios.post("https://bulkmail-backend-dmvu.onrender.com/sendemail",{subject:subject,emailbody:emailbody,emailList:emailList}).then((data)=>{
  if(data.data===true){
    setstatus(false)
toast.success("Email sent Succesfully")
  }
 
  }).catch((err)=>{
    console.log(err)
    setstatus(false)
    toast.error("Failed to send email")
  })

  }
  return (
    <div className="w-full min-w-0 bg-white rounded-2xl p-5 shadow-sm dark:bg-slate-900">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-3">
          <div className="bg-blue-500 text-white p-4 rounded-xl flex  justify-between items-center">
            <FiSettings size={26} />
          </div>

          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Send Email
          </h2>
        </div>



      </div>


   
      <button className="w-full min-w-0 px-4 py-4 flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg  rounded-xl" onClick={send}>
        <FiSend size={20} />
      <span className="truncate">{status?"Sending":"Send Bulk Mail"}</span>
      </button>


    </div>
  );
}

export default SendEmail;