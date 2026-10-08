import React, { useContext, useState } from 'react'
import { FiUploadCloud,FiCheckCircle,FiX } from 'react-icons/fi';
import * as XLSX from "xlsx"
import { Emailcontext } from '../usecontext/Emailcontext';


const UploadContactList = () => {


 const{emailList,setEmailList} = useContext(Emailcontext)

 const [showdiv,setshowdiv] = useState(true)

 const[filename,setfilename] = useState("")

  const handleFile = (event)=>{

    const file = event.target.files[0]

    setfilename(file.name)

    
 

    const reader = new FileReader()


    reader.onload = (evt)=>{
     const data = evt.target.result

   
   

     const workbook = XLSX.read(data,{type:"binary"})

     const sheet = workbook.SheetNames[0]

     console.log(workbook)

     const worksheet = workbook.Sheets[sheet]

    const email = XLSX.utils.sheet_to_json(worksheet,{header:"A"})

   

    const totalemail = email.map(function(item){
  return item.A
    })
console.log(totalemail)
setEmailList(totalemail)






    }



    reader.readAsBinaryString(file)

   

  }
  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-800">


      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
          1
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Upload Contact List
        </h2>
      </div>

    
      <div className="rounded-xl border-2 border-dashed border-blue-300 bg-slate-50 px-4 py-8 text-center dark:bg-slate-900 dark:text-white">

        <FiUploadCloud className="mx-auto mb-3 text-4xl text-blue-600" />

        <p className="text-lg font-medium text-slate-800 dark:text-white">
          Drag & drop your Excel file here
        </p>

        <p className="my-2 text-sm text-slate-500">
          or
        </p>

        <label className="inline-block cursor-pointer rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
          Choose File

          <input
            type="file"
            accept=".xlsx,.xls"
            className="hidden"

            onChange={handleFile}
          />
        </label>

        <p className="mt-4 text-sm text-slate-500">
          Supported formats: .xlsx, .xls
          <span className="mx-2">|</span>
          First column should contain email addresses
        </p>
      </div>

      {/* Uploaded File */}
   { showdiv && <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 dark:bg-slate-800">

        <div className="flex items-center gap-3">
         

          <div>
            <p className="font-semibold text-slate-800 dark:text-white">
            {filename}
            </p>

            <p className="text-sm text-slate-500">
              {emailList.length} recipients
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
      <div>

        {emailList.length>1 &&     <FiCheckCircle className="text-2xl text-green-500" />}
      </div>

          <FiX className="cursor-pointer text-xl text-slate-500 hover:text-red-500" onClick={()=>{setshowdiv(false)}}/>
        </div>
      </div>
}
    
      

    </div>
  );
};


export default UploadContactList