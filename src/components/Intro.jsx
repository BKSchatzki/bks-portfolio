import React from 'react'

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">I'm Brendan.</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Software Engineer | Web Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem amet vel temporibus possimus modi! Alias iure tenetur possimus amet, voluptatibus recusandae molestias ut tempora exercitationem sit ducimus vitae!<br/><br/>Ex perspiciatis et officiis quod non inventore doloribus repellendus odit dolores porro, vero ut, reprehenderit laudantium{" "}
      <a
        className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
        href="#"
        rel="noreferrer noopener"
        target="_blank"
      >
        accusantium
      </a>?{" "}
      Consequatur accusamus quo atque?</p>
    </div>
  )
}

export default Intro