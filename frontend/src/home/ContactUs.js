import React, { useState } from "react";
import { toast } from "react-toastify";
const ContactUs = () => {
  const [msg, setMsg] = useState({
    message: "",
    email: "",
  });
  const { message, email } = msg;
  const handleSubmit = () => {
    console.log(msg);
    if (!message || !email) {
      toast.error("Please enter Email and Message");
      return;
    }
    toast.success("Thank you for message.");
  };
  const changeHandle = (e) => {
    setMsg((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="p-10"
          />
        </div>
        <div className="bg-four">
          <div className="flex flex-col space-y-2 p-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="rounded "
              onChange={changeHandle}
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col space-y-2 p-5">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              className="rounded "
              onChange={changeHandle}
              placeholder="Enter your Message"
            />
          </div>
          <div className="flex flex-row justify-center my-5 rounded">
            <button
              onClick={() => handleSubmit()}
              className="px-10 py-2 bg-five text-[white] rounded"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
