import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="mx-auto my-16 flex scroll-m-24 flex-col" id="contact">
      <div className="flex flex-col items-center justify-center">
        <Title>Contact</Title>
        <form
          action="#"
          className="flex w-full flex-col rounded-2xl bg-stone-50/75 p-8 shadow-2xl shadow-stone-700/30 dark:bg-slate-900/75 dark:shadow-slate-950/30"
          method="POST"
        >
          <label hidden htmlFor="name">
            Name:
          </label>
          <input
            className="rounded-md border border-stone-200 bg-transparent px-4 py-2 hover:bg-stone-50/50 focus:bg-stone-50 focus:outline-none dark:border-slate-700 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900"
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
            className="my-2 rounded-md border border-stone-200 bg-transparent px-4 py-2 hover:bg-stone-50/50 focus:bg-stone-50 focus:outline-none dark:border-slate-700 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900"
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
            className="mb-4 rounded-md border border-stone-200 bg-transparent px-4 py-2 hover:bg-stone-50/50 focus:bg-stone-50 focus:outline-none dark:border-slate-700 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900"
            id="message"
            name="message"
            placeholder="Message"
            required
            rows="10"
          />
          <button
            className="w-max self-center rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-6 py-3 text-center text-xl font-extrabold shadow-lg transition-transform duration-100 active:scale-90 dark:from-violet-700 dark:to-blue-700"
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
