import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="mx-auto mb-10 flex flex-col">
      <div className="flex items-center justify-center">
        <form action="#" className="flex w-full flex-col" method="POST">
          <Title>Contact</Title>
          <label hidden htmlFor="name">
            Name:
          </label>
          <input
            className="rounded-md border-2 bg-transparent p-2 focus:outline-none"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
          />
          <label hidden htmlFor="email">
            Email:
          </label>
          <input
            className="my-2 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <label hidden htmlFor="message">
            Message:
          </label>
          <textarea
            className="mb-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            id="message"
            name="message"
            placeholder="Message"
            rows="10"
          />
          <button
            className="inline-block w-max rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-8 py-3 text-center text-base font-medium text-white drop-shadow-md"
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
