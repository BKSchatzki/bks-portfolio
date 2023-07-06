import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="#"
          className="flex flex-col w-full md:w-7/12"
          method="POST"
        >
          <input
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            name="name"
            placeholder="Name"
            type="text"
          />
          <input
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            name="email"
            placeholder="Email"
            type="email"
          />
          <textarea
            className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            name="message"
            placeholder="Message"
            rows="10"
          />
          <button
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
            type="button"
          >
            Work With Me.
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact