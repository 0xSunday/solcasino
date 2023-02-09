import React, { useState, useRef } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [requestStatus, setRequestStatus] = useState();

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    // console.log(enteredComment, enteredEmail, enteredName);

    const resposnse = await fetch("/api/Contect", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        message: enteredComment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = resposnse.json();

    if (!resposnse.ok) {
      throw new Error(data.message || "something went wong !");
    }

    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    commentInputRef.current.value = "";
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="bg-none sm:px-20 py-9 sm:bg-gradient-to-tr  sm:from-primary sm:via-[#0A2647] sm:to-primary  rounded-3xl"
    >
      <div className="flex flex-col sm:flex-row ">
        <div className="mb-3 pt-0 w-full sm:pr-10 pr-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="sm:px-5 px-3 py-3 my-3 placeholder-dimWhite rounded-3xl border-2  border-yellow-300   sm:text-[20px] text[15px] text-white relative bg-black   shadow outline-none focus:outline-none focus:no-underline w-full"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-3 pt-0 w-full">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="sm:px-5 px-3 py-3 my-3 placeholder-dimWhite rounded-3xl border-2  border-yellow-300   sm:text-[20px] text[15px] text-white relative bg-black   shadow outline-none focus:outline-none focus:no-underline w-full"
            required
            ref={nameInputRef}
          />
        </div>
      </div>

      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="sm:px-5 px-3 py-3 my-3 placeholder-dimWhite rounded-3xl border-2  border-yellow-300   sm:text-[20px] text[15px]  text-white relative bg-black   shadow outline-none focus:outline-none focus:no-underline w-full"
          required
          ref={commentInputRef}
        />
      </div>
      <div className=" w-full flex justify-end mb-3 pt-0">
        <button
          className="bg-yellow-300 text-black active:bg-yellow-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-yellow-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
