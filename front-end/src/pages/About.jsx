import { useState } from "react"

const About = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const faqsData = [
    {
      question: 'Lightning-Fast Performance',
      answer: 'Built with speed — minimal load times and optimized rendering.'
    },
    {
      question: 'Fully Customizable Components',
      answer: 'Easily adjust styles, structure, and behavior to match your project needs.'
    },
    {
      question: 'Responsive by Default',
      answer: 'Every component are responsive by default — no extra CSS required.'
    },
    {
      question: 'Tailwind CSS Powered',
      answer: 'Built using Tailwind utility classes — no extra CSS or frameworks required.'
    },
    {
      question: 'Dark Mode Support',
      answer: 'All components come ready with light and dark theme support out of the box.'
    }
  ]

  return (
    <div className='my-24 flex flex-col items-center text-center text-slate-800 px-3'>
      <p className='text-base font-medium text-slate-600'>FAQ</p>
      <h1 className='text-3xl md:text-4xl font-semibold mt-2'>
        Frequently Asked Questions
      </h1>
      <p className='text-sm text-slate-500 mt-4 max-w-sm'>
        Proactively answering FAQs boosts user confidence and cuts down on support tickets.
      </p>

      <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
        {faqsData.map((faq, index) => (
          <div key={index} className='flex flex-col items-start w-full'>
            <div
              className='flex items-center justify-between w-full cursor-pointer bg-slate-50 border border-slate-200 p-4 rounded'
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h2 className='text-sm'>{faq.question}</h2>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={`${openIndex === index ? 'rotate-180' : ''} transition-all duration-500 ease-in-out`}
              >
                <path
                  d='m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2'
                  stroke='#1D293D'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <p
              className={`text-sm text-slate-500 px-4 transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? 'opacity-100 max-h-[300px] translate-y-0 pt-4'
                  : 'opacity-0 max-h-0 -translate-y-2'
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
        <section className=" my-24 flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full object-cover rounded-2xl"
                        src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                        alt="" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                        <div className="flex -space-x-4 shrink-0">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                            <div
                                className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-800">Join our developer community</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                    <p className="mt-8">PrebuiltUI helps you build faster by transforming your design vision into fully functional,
                        production-ready UI components. </p>
                    <p className="mt-4">Whether you're launching a SaaS app, landing page, or dashboard, our collection of Tailwind
                        CSS components is crafted to boost your development speed and improve user experience.</p>
                    <p className="mt-4">From UI design systems to automation-ready layouts, PrebuiltUI empowers you to build
                        beautifully and scale effortlessly.</p>
                    <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" />
                        </svg>
                    </button>
                </div>
            </section>
            <section className="my-24">
                          <h1 className="text-3xl font-semibold text-center mx-auto">Latest Blog</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
                Stay ahead of the curve with fresh content on code, design, startups, and everything in between.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1714974528646-ea024a3db7a7?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
                <div className="max-w-72 w-full hover:-translate-y-0.5 transition duration-300">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1713947501966-34897f21162e?w=1200&h=800&auto=format&fit=crop&q=60" alt="" />
                    <h3 className="text-base text-slate-900 font-medium mt-3">Color Psychology in UI: How to Choose the Right Palette</h3>
                    <p className="text-xs text-indigo-600 font-medium mt-1">UI/UX design</p>
                </div>
            </div>

            </section>
    </div>
  )
}

export default About