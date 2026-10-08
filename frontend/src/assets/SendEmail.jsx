import { useContext, useState } from "react";
import { FiSettings, FiSend } from "react-icons/fi";
import { Emailcontext } from "../usecontext/Emailcontext";
import axios from "axios";
import toast from "react-hot-toast";

function SendEmail() {

  const { subject, emailbody, emailList } = useContext(Emailcontext);

  const [status, setstatus] = useState(false);

  const send = () => {

    setstatus(true);

    axios.post(
      "http://localhost:8000/sendemail",
      {
        subject: subject,
        emailbody: emailbody,
        emailList: emailList
      }
    )
    .then((response) => {

      if (response.data == true) {

        setstatus(false);
        toast.success("Email sent successfully");

      } else {

        toast.error("Failed to send email");
        setstatus(false);

      }

    })
    .catch((error) => {

      console.log(error);
      toast.error("Failed to send email");
      setstatus(false);

    });

  };

  return (
    <div className="w-full min-w-0 bg-white rounded-2xl p-5 shadow-sm dark:bg-slate-900">

      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-3">

          <div className="bg-blue-500 text-white p-4 rounded-xl flex justify-between items-center">
            <FiSettings size={26} />
          </div>

          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            Send Email
          </h2>

        </div>

      </div>

      <button
        className="w-full min-w-0 px-4 py-4 flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-xl"
        onClick={send}
        disabled={status}
      >

        <FiSend size={20} />

        <span className="truncate">
          {status ? "Sending" : "Send Bulk Mail"}
        </span>

      </button>

    </div>
  );
}

export default SendEmail;