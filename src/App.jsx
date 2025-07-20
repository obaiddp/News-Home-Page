import React, { useState } from 'react'

import heroimage from '/images/image-web-3-desktop.jpg';
import retropc from '/images/image-retro-pcs.jpg';
import laptop from '/images/image-top-laptops.jpg';
import gaming from '/images/image-gaming-growth.jpg'; 

import BottomCard from './components/BottomCard';
import Header from './components/Header';

const bottomCards = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
    image: retropc
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
    image: laptop
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities.",
    image: gaming
  }
];

const newNews = [
  {
    heading: "Hydrogen vs Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?"
  },
  {
    heading: "The Downside of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?"
  },
  {
    heading: "Is VC Funding Drying Up?",
    desc: "Private funding via VC firms is down 50% YOY. We take a look at what that means."
  },
  {
    heading: "Quantum Computing Hits Milestone",
    desc: "A major breakthrough could bring quantum computing closer to real-world applications."
  },
  {
    heading: "Remote Work Reshaping Cities",
    desc: "How the rise of remote jobs is transforming housing and urban infrastructure."
  },
  {
    heading: "The Rise of Sustainable Tech",
    desc: "Startups are racing to build greener alternatives to everyday devices and energy sources."
  }
];


const App = () => {
  const [latestNews, setLatestNews] = useState(newNews);

  return (

    // ✅ FIX: Padding now scales properly across breakpoints
    <div className="max-w-[1500px] mx-auto px-2 sm:px-6 lg:px-4 py-10 pb-20 min-h-sreen">

      {/* Section 1 */}
      <Header />

      {/* Section 2 */}
      {/* ✅ FIX: grid-cols-1 ensures mobile stack; md layout kicks in on medium and up */}
      <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-5 gap-6">

        {/* 🖼️ Section 1: Hero Image */}
        <div className="order-1 md:order-1 h-[400px] sm:h-[500px] md:h-auto md:col-span-7 md:row-span-3">
          {/* ✅ FIX: h-[250px] gives the image a visible height on small devices */}
          <img src={heroimage} alt="hero" className='w-full h-full object-cover' />
        </div>

        {/* 📰 Section 2: Sidebar News */}
        <div className="order-3 md:order-2 md:col-span-3 md:row-span-5 bg-[#00001A] px-6 py-6 md:px-10">
          {/* ✅ FIX: Removed invalid class `pr-25` (not a valid Tailwind class) */}
          <h1 className='text-[#EBAB53] text-4xl font-bold mb-4'>New</h1>
          {latestNews.map((news, index) => (
            <div key={index} className={`${index !== latestNews.length - 1 ? 'border-b border-gray-600' : ''} py-4`}>
              <h2 className="text-white text-lg font-bold mb-2 hover:text-[#EBAB53] cursor-pointer transition">
                {news.heading}
              </h2>
              <p className="text-gray-400 text-sm tracking-wider">
                {news.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 🧠 Section 3: Heading */}
        <div className="order-2 md:order-3 md:col-span-3 md:row-span-2 md:mt-8">
          <h2 className='text-5xl sm:pr-20 sm:text-5xl md:text-5xl lg:text-6xl md:font-extrabold md:leading-tight text-[#01021B] font-black leading-[1.1] pr-4 md:pr-16'>
            The Bright Future of Web 3.0?
          </h2>
        </div>

        {/* 📖 Section 4: Paragraph + Button */}
        <div className="order-2 md:order-4 md:col-span-4 md:row-span-2 md:mt-8">
          <p className='text-sm sm:text-lg lg:pr-40 leading-6 text-[#88858C] leading-loose mb-6 tracking-wide font-sans'>
            We dive into the next evolution of web that claims to put the power of platforms back into the hands of people.
            But is it really fulfilling its promise?
          </p>
          <button className='bg-[#F15D50] hover:bg-[#01021B] text-white font-bold tracking-wider px-9 py-3 transition uppercase'>
            Read More
          </button>
        </div>

      </div>


      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 mt-15">
        <div className="col-span-1">
          <BottomCard
            index={"01"}
            title={"Reviving Retro PCs"}
            desc={"What happens when old PCs are given modern upgrades?"}
            image={retropc}
          />
        </div>

        <div className="col-span-1">
          <BottomCard
            index={"02"}
            title={"Top 10 Laptops of 2022"}
            desc={"Our best picks for various needs and budgets."}
            image={laptop}
          />
        </div>

        <div className="col-span-1">
          <BottomCard
            index={"03"}
            title={"The Growth of Gaming"}
            desc={"How the pandemic has sparked fresh opportunities."}
            image={gaming}
          />
        </div>
      </div>

    </div>
  );
};

export default App;