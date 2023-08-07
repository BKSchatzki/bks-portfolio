import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div
      className="mx-auto my-8 flex scroll-m-24 flex-col sm:my-16"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center">
        <Title>Contact</Title>
        <form
          action="#"
          className="flex w-full flex-col rounded-2xl bg-stone-50/75 p-8 shadow-2xl shadow-stone-700/30 dark:bg-slate-900/75 dark:shadow-slate-950/30 sm:p-12 lg:p-16"
          method="POST"
        >
          <label hidden htmlFor="name">
            Name:
          </label>
          <input
            className="mb-2 rounded-md border border-stone-200 bg-transparent px-4 py-2 text-sm hover:bg-stone-50/50 focus:bg-stone-50 focus:outline-none dark:border-slate-700 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900 sm:mb-2.5 sm:px-5 sm:py-2.5 sm:text-base lg:mb-3 lg:px-6 lg:py-3 lg:text-lg"
            id="name"
            name="name"
            placeholder="Name"
            required
            type="text"
          />
          <label hidden htmlFor="email">
            Email:
          </label>
          <input
            className="mb-2 rounded-md border border-stone-200 bg-transparent px-4 py-2 text-sm hover:bg-stone-50/50 focus:bg-stone-50 focus:outline-none dark:border-slate-700 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900 sm:mb-2.5 sm:px-5 sm:py-2.5 sm:text-base lg:mb-3 lg:px-6 lg:py-3 lg:text-lg"
            id="email"
            name="email"
            placeholder="Email"
            required
            type="email"
          />
          <label hidden htmlFor="message">
            Message:
          </label>
          <textarea
            className="mb-4 rounded-md border border-stone-200 bg-transparent px-4 py-2 text-sm hover:bg-stone-50/50 focus:bg-stone-50 focus:outline-none dark:border-slate-700 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900 sm:px-5 sm:py-2.5 sm:text-base lg:px-6 lg:py-3 lg:text-lg"
            id="message"
            name="message"
            placeholder="Message"
            required
            rows="10"
          />
          <button
            className="w-max self-center rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-6 py-3 text-center text-lg font-extrabold shadow-lg transition-transform duration-100 hover:brightness-150 active:scale-90 dark:from-violet-700 dark:to-blue-700 sm:px-7 sm:py-3.5 sm:text-xl lg:px-8 lg:py-4 lg:text-2xl"
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
