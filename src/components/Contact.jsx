import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="mx-auto my-16 flex scroll-m-28 flex-col" id="contact">
      <div className="flex flex-col items-center justify-center">
        <Title>Contact</Title>
        <form
          action="#"
          className="flex w-full flex-col rounded-2xl bg-slate-50 p-8 shadow-2xl"
          method="POST"
        >
          <label hidden htmlFor="name">
            Name:
          </label>
          <input
            className="rounded-md border-2 bg-transparent px-4 py-2 focus:outline-none"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
          />
          <label hidden htmlFor="email">
            Email:
          </label>
          <input
            className="my-2 rounded-md border-2 bg-transparent px-4 py-2 focus:outline-none"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <label hidden htmlFor="message">
            Message:
          </label>
          <textarea
            className="mb-4 rounded-md border-2 bg-transparent px-4 py-2 focus:outline-none"
            id="message"
            name="message"
            placeholder="Message"
            rows="10"
          />
          <button
            className="w-max self-center rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-6 py-3 text-center text-xl font-extrabold shadow-lg transition-transform duration-100 active:scale-90"
            type="button"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
