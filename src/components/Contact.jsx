import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="mx-auto mb-10 flex flex-col">
      <div className="flex items-center justify-center">
        <form
          action="#"
          className="flex w-full flex-col md:w-7/12"
          method="POST"
        >
          <Title>Contact</Title>
          <input
            className="rounded-md border-2 bg-transparent p-2 focus:outline-none"
            name="name"
            placeholder="Name"
            type="text"
          />
          <input
            className="my-2 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            name="email"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="mb-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            name="message"
            placeholder="Message"
            rows="10"
          />
          <button
            className="inline-block w-max rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-8 py-3 text-center text-base font-medium text-white drop-shadow-md hover:stroke-white"
            type="button"
          >
            Work With Me.
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
