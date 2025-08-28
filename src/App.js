import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import Header from './components/Header/Navbar';
import Button from "./components/Button/Button";

import Fearures from "./components/Features/Features"
import PricePackages from './components/Pricing/PricingPackages';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import ChatInput from "./components/ChatInput/ChatCard";

export const SIGNUP_FORM_LINK = "https://2fdzq6.share-eu1.hsforms.com/2pm4BhnAMQDSLDUgaF_OnAg"

function App() {
   const icons = [
    "McpIcon.svg","Github.svg","Supabase.svg","MicrosoftAzure.svg",
    "AmazonIcon.svg","GoogleCloud.svg","Firebase.svg","GoogleAnalytics.svg",
    "Snapchat.svg","LinearIcon.svg","ClickUp.svg","MegaMenu.svg","NotionIcon.svg",
  ];
  return (
    <div>
      <Header/>
      <div className="bg-herobanner bg-cover bg-center relative py-5 text-center pt-20 pb-0">
        <div className='container max-auto'>
          <div className='flex-inline flex-col text-center '>
            <div className='inline-flex items-center justify-center bg-primary40 rounded-full font-sora text-[16px] text-darktext mx-auto relative px-[1px] pr-4 sm:mb-1'>
              <img 
                  src='/EmojiIcon.svg'
                  alt="Emoji Icon"
                  className='relative top-[5px]'
              />
              It's Pale here!
            </div>
            <h3 className='text-center text-primary sm:text-[24px] sm:leading-[33px]'>You allow the actions - I do the work</h3>
            <p className='font-noto text-[23px] text-black40 sm:text-[15px]'>AI agents without worries.</p>
            <a href={SIGNUP_FORM_LINK} target="_blank">
              <Button variant="primary" className="py-[16px] px-[32px] mt-5">
                  Sign up to waitlist
              </Button>
            </a>
          </div>  
          <div className='text-center mx-auto inline-flex flex-col justify-center pt-24'>
            <ChatInput/>
            <img src='/HeroImg.svg' alt="Hero Img" />
          </div>
        </div>
      </div>
      {/* hero section end */}
      <Fearures/>   
      <div className='relative py-[100px]'>
        <div className='container mx-auto'>
          <div className='bg-texturebg bg-cover rounded-[24px] py-16 text-center'>
            <div className='inline-flex items-center justify-center bg-[#ffffff80] rounded-full font-sora text-[16px] text-darktext mx-auto relative px-[1px] pr-4'>
              <img 
                  src='/EmojiIcon.svg'
                  alt="Emoji Icon"
                  className='relative top-[5px]'
              />
              Hook me up without headache
            </div>            
            <h3 className='text-center mx-auto sm:text-[31px] sm:leading-[38px]'>I'm fluent in over <br/>
              <strong>100+</strong> Apps via MCP
            </h3>
            <div className="marquee overflow-hidden w-full py-5 pb-2">
              <div className="marquee-track flex items-center gap-7">
                {icons.map((icon, i) => (
                  <div
                    key={`a-${i}`}
                    className="bg-white w-[60px] h-[60px] rounded-full border border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125"
                  >
                    <img src={`/app-icon/${icon}`} alt="Icon" />
                  </div>
                ))}
                {icons.map((icon, i) => (
                  <div
                    key={`b-${i}`}
                    className="bg-white w-[60px] h-[60px] rounded-full border border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125"
                    aria-hidden="true"
                  >
                    <img src={`/app-icon/${icon}`} alt="Icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <AboutMe/> */}
      <PricePackages/>
      <FAQ/>
      <div className="bg-white py-20 border-b-[1px] border-[#0000001a] border-b-[1px] relative object-cover">
        <img src='/shadowbg-img.svg' alt='' className='absolute top-[-250px] w-full bottom-0 left-0 right-0 mx-auto object-cover w-[100%] sm:top-[0px]' />
        <div className='container mx-auto text-center'>
          <h3 className='text-primary text-center sm:text-[31px] sm:leading-[40px] sm:mb-2'>I'm ready to prove myself - <strong className='block font-semibold text-[#0000004d]'>Are you?</strong></h3>
          <a href={SIGNUP_FORM_LINK} target="_blank">
            <Button variant="primary" className="py-[16px] px-[32px] mt-5 !text-[18px]">
                Sign up to waitlist
            </Button>          
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
