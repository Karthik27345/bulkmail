import { useContext } from "react";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiList,
  FiAlignLeft,
  FiLink,
  FiImage,
  FiPaperclip,
  FiFileText,
  FiX,
} from "react-icons/fi";
import { Emailcontext } from "../usecontext/Emailcontext";

const ComposeEmail = () => {


  const { subject, setSubject, emailbody, setEmailBody } = useContext(Emailcontext)


  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-800">


      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
          2
        </div>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Compose Email
        </h2>
      </div>


      <div className="mb-4 flex items-center gap-4">
        <label className="font-semibold text-slate-800 dark:text-white">
          Subject
        </label>

        <input
          type="text"
          className="flex-1 rounded-lg border border-slate-200 px-3 py-2 outline-none bg-white text-black dark:bg-slate-700 dark:text-white"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value)
          }}
          placeholder="Subject"
        />

        <button className="whitespace-nowrap font-medium text-slate-700 dark:text-white">
          Insert Field
          <span className="ml-2">⌄</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-5 border-b border-slate-200 px-3 py-3 dark:text-white">

        <button className="font-medium">
          Normal
          <span className="ml-2">⌄</span>
        </button>

        <FiBold className="cursor-pointer text-xl" />
        <FiItalic className="cursor-pointer text-xl" />
        <FiUnderline className="cursor-pointer text-xl" />

        <FiList className="cursor-pointer text-xl" />
        <FiAlignLeft className="cursor-pointer text-xl" />

        <FiLink className="cursor-pointer text-xl" />
        <FiImage className="cursor-pointer text-xl" />

        <span className="cursor-pointer text-lg font-bold">
          {"{}"}
        </span>

      </div>

      <textarea className="w-full h-[300px] border-2 rounded-xl p-3 bg-white text-black dark:bg-slate-700 dark:text-white" value={emailbody} onChange={(e)=>{
        setEmailBody(e.target.value) 
      }} placeholder="Write your email"></textarea>



    </div>
  );
};

export default ComposeEmail;