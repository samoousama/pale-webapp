import { useState } from "react";
import './App.css';
import Header from './components/Header/Navbar';
import Button from "./components/Button/Button";

import Fearures from "./components/Features/Features"
import AboutMe from './components/Carousel/AboutMe';
import PricePackages from './components/Pricing/PricingPackages';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };
  return (
    <div>
      <Header/>
      <div className="bg-herobanner bg-cover bg-center relative py-5 text-center pt-20 pb-0">
        <div className='container max-auto'>
          <div className='flex-inline flex-col text-center '>
            <div className='inline-flex items-center justify-center bg-[#f5b89966] rounded-full font-sora text-[16px] text-darktext mx-auto relative px-[1px] pr-4 sm:mb-1'>
              <img 
                  src='/emoji.svg'
                  className='relative top-[5px]'
              />
              It's Pale here!
            </div>
            <h3 className='text-center text-primary sm:text-[24px] sm:leading-[33px]'>You allow the actions - I do the work</h3>
            <p className='font-noto text-[23px] text-[#00000099] sm:text-[15px]'>AI Integrations without worries.</p>
            <Button variant="primary" onClick={() => handleScroll("pricing")} className="py-[11px] px-7 mt-5">
                Get Started
            </Button>
          </div>  
          <div className='text-center mx-auto inline-flex flex-col justify-center pt-24'>
            <div className='min-w-[645px] sm:min-w-[100%] mx-auto bg-[#ffffff66] py-5 border-[1px] border-[#fff] px-5 rounded-[32px] justify-between flex flex-col h-[150px] relative overflow-hidden backdrop-blur-sm shadow-lg'>
             <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>
              <input name="" placeholder='Create a draft pull request on @GitHub for my ticket on @Jira' className='w-full py-2 placeholder-black bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none z-40 relative'/>
              <div className='flex justify-between items-center sm:gap-2'>
                <div className='flex items-center gap-3 relative'>
                  <img src='/attherat.svg' />
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[10px] py-[5px] items-center shadow-md'><img src='/github-icon.svg' />GitHub <img src='/cross-icon.svg'/></Button>
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[10px] py-[5px] items-center shadow-md'><img src='/jira-icon.svg' />Jira <img src='/cross-icon.svg'/></Button>
                </div>
                <div className='flex justify-between items-center gap-4 sm:gap-1'>
                  <img src='/signIcon.svg' alt='' className='h-[16px]' />
                  <Button className='w-[35px] h-[35px] !p-0 !flex !items-center !text-center justify-center'><img src='/buttonArrow.svg' /></Button>
                </div>
              </div>
            </div>
            <img src='/hero-img.svg' />
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
                  src='/emoji.svg'
                  className='relative top-[5px]'
              />
              Hook me up without headache
            </div>            
            <h3 className='text-center mx-auto sm:text-[31px]'>I'm fluent in over <br/>
              <strong>100+</strong> Apps via MCP
            </h3>
            <div className='flex items-center justify-center pt-10 gap-7 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-3'>
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/icon324.svg' 
                    alt=''
                />
              </div>
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/github.svg' 
                    alt=''
                />
              </div>     
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/Vector10.svg' 
                    alt=''
                />
              </div>                           
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/Microsoft_Azure1.svg' 
                    alt=''
                />
              </div>
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/Amazon_icon.svg' 
                    alt=''
                />
              </div>                              
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/googlecloud.svg' 
                    alt=''
                />
              </div>                              
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/firebase.svg' 
                    alt=''
                />
              </div>                           
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/googleanalytics.svg' 
                    alt=''
                />
              </div>
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/snapchat.svg' 
                    alt=''
                />
              </div>
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/linearIcon.svg' 
                    alt=''
                />
              </div>                             
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/clickup1.svg' 
                    alt=''
                />
              </div>
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/Frame30934.svg' 
                    alt=''
                />
              </div>                             
              <div className='bg-white w-[60px] h-[60px] rounded-full border-[1px] border-[#0505051a] flex justify-center items-center overflow-hidden transition duration-700 ease-in-out hover:scale-125'>
                <img 
                    src='/app-icon/Vectors21.svg' 
                    alt=''
                />
              </div>                                                                                                                                                                        
            </div>
          </div>
        </div>
      </div>
      <AboutMe/>
      <PricePackages/>
      <FAQ/>
      <div className="bg-white py-20 border-b-[1px] border-[#0000001a] border-b-[1px] relative overflow-hidden object-cover">
        <img src='/shadowbg-img.svg' alt='' className='absolute top-0 bottom-0 left-0 right-0 mx-auto object-cover w-[100%]' />
        <div className='container mx-auto text-center'>
          <h3 className='text-primary text-center sm:text-[31px]'>I'm ready to prove myself - <strong className='block font-semibold text-[#0000004d]'>Are you?</strong></h3>
          <Button variant="primary" onClick={() => alert("Get Started")} className="py-[11px] px-7 mt-5">
              Get Started
          </Button>          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
