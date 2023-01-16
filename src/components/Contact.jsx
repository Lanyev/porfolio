import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err));
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-emerald-700  to-emerald-700 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-lime-300">
            Contact me
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black bg-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black bg-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black bg-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-lime-500 to-lime-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send me your message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
