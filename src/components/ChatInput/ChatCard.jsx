import { useState } from "react";
import Button from "../Button/Button";

function ChatInput({ 
  placeholderText = <>Create a draft pull request on <b>@GitHub</b> for my ticket on <b>@Jira</b></>,
  showDropdown = false,
  showSuggest = false,
  className = "" 
}) {

  return (
    <>
      {showDropdown && (
        <div className="bg-white40 py-3 border-[1px] border-white px-2 rounded-[22px] justify-between flex flex-col max-w-[250px] mx-auto relative shadow-lg overflow-hidden backdrop-blur-sm z-40">
          <div className="absolute w-full h-full bg-black6 top-0 left-0"></div>
          <ul className="space-y-1 relative">
            <li className="flex justify-between items-center py-3 px-3 rounded-full pt-2">
              <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                <img src="/HubSpot.svg" alt="HubSpot"/>
                HubSpot
              </div>  
              <img src="/ClockCircle.svg" alt="Clock Circle"/>
            </li>
            <li className="flex justify-between items-center py-3 px-3 rounded-full">
              <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                <img src="/GithubIcon.svg" alt="Github Icon"/>
                GitHub
              </div>  
              <img src="/CheckIcon.svg" alt="Check Icon"/>
            </li>
            <li className="flex justify-between items-center py-3 px-3 rounded-full">
              <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                <img src="/InstaIcon.svg" alt="Instagram Icon"/>
                Instagram
              </div>  
              <img src="/ClockCircle.svg" alt="Clock Circle"/>
            </li>
            <li className="flex justify-between items-center py-3 px-3 rounded-full">
              <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                <img src="/DriveIcon.svg" alt="Drive Icon"/>
                Drive
              </div>  
            </li>
            <li className="flex justify-between items-center py-3 bg-black10 px-3 rounded-[16px]">
              <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                <img src="/Sentry.svg" alt="Sentry"/>
                Sentry
              </div>  
            </li>                
          </ul> 
        </div>
      )}
      <div className={`min-w-[645px] sm:min-w-[100%] mx-auto bg-white40 py-5 border-[0.5px] px-5 rounded-[32px] border-white justify-between flex flex-col min-h-[150px] relative overflow-hidden backdrop-blur-sm shadow-lg mt-[-20px] ${className}`}>
        <div className="absolute w-full h-full bg-black6 top-0 left-0"></div>
        <div className="w-full py-2 text-left bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none relative resize-none">
          {placeholderText}
        </div>
        <div className='flex justify-between items-center sm:gap-2'>
          <div className='flex items-center gap-3 relative'>
            <img src='/Attherat.svg' alt="@ icon" />
            <Button className='flex gap-1 !bg-gray40 !text-primary border-[1px] border-white px-[5px] pr-[15px] py-[5px] items-center shadow-lg hover:!translate-y-[0px] sm:!text-[12px]'>
              <img src='/GithubIcon.svg' className="sm:h-[16px]" alt="GitHub icon" />GitHub <img src='/CrossIcon.svg' alt="Cross icon"/>
            </Button>
            <Button className='flex gap-1 !bg-gray40 !text-primary border-[1px] border-white px-[5px] pr-[15px] py-[5px] items-center shadow-lg hover:!translate-y-[0px] sm:!text-[12px]'>
              <img src='/JiraIcon.svg' className="sm:h-[16px]" alt="Jira icon" />Jira <img src='/CrossIcon.svg' alt="Cross icon"/>
            </Button>
          </div>
          <div className='flex justify-between items-center gap-4 sm:gap-1'>
            <img src='/signIcon.svg' className='h-[16px]' alt="Signature icon" />
            <Button className='w-[35px] h-[35px] !p-0 !flex !items-center !text-center justify-center !rounded-[100px]'>
              <img src='/buttonArrow.svg' alt="Button Arrow" />
            </Button>
          </div>
        </div>
      </div>
      {showSuggest && (
        <div className="bg-white40 py-4 border-[1px] border-white px-4 rounded-[32px] justify-between flex flex-col max-w-[270px] relative shadow-lg relative overflow-hidden backdrop-blur-sm z-40 ml-10 mt-[-10px]">
          <div className="absolute w-full h-full bg-black6 top-0 left-0"></div>
            <div className="dropdown relative">
              <a href="#" className="flex justify-between items-center">
              <p className="font-sora text-[11px] text-darkgray flex gap-2"><img src="/EyeIcon.svg" />Reads</p>
                <img src="/DropdownIcon.svg" />
              </a> 
              <div className="bg-gray8 rounded-[12px] py-3 px-3 my-3 mb-6">
                <ul>
                  <li className="font-sora text-[12px] text-darkgray flex justify-between items-center border-b-[1px] border-black10 pb-2">
                  Create Contacts
                  <div className="flex gap-[1.7] bg-iconbg p-[1.7px] rounded-[6px]">
                    <img src="/Icons8Block.svg" alt="Icon" />
                    <img src="/Icons9Block.svg" alt="Icon" />
                    <img src="/Icons10Block.svg" alt="ICon" />
                  </div>
                  </li>
                  <li className="font-sora text-[12px] text-darkgray flex justify-between items-center pt-2">
                  Delete Companies
                  <div className="flex gap-[1.7] bg-iconbg p-[1.7px] rounded-[6px]">
                    <img src="/Icons8Block.svg" alt="Icon" />
                    <img src="/Icons9Block.svg" alt="Icon" />
                    <img src="/Icons10Block.svg" alt="ICon" />
                  </div>
                  </li>
                </ul> 
              </div>
            </div>
            <div className="dropdown relative">
              <a href="#" className="flex justify-between items-center">
              <p className="font-sora text-[11px] text-darkgray flex gap-2"><img src="/EyeIcon.svg" />Changes</p>
              <img src="/DropdownIcon.svg" alt="Dropdown" />
              </a> 
              <div className="bg-gray8 rounded-[12px] py-2 px-3 my-2 mb-0">
                <ul>
                  <li className="font-sora text-[12px] text-darkgray flex justify-between items-center border-b-[1px] border-black10 pb-2">
                  View Contacts
                  <div className="flex gap-[1.7] bg-iconbg p-[1.7px] rounded-[6px]">
                    <img src="/CheckiconCircle.svg" alt="Check Icon Circle" />
                    <img src="/AlertIcon.svg" alt="Alert Icon" />
                    <img src="/Icons10Block.svg" alt="Icon" />
                  </div>
                  </li>
                  <li className="font-sora text-[12px] text-darkgray flex justify-between items-center pt-2">
                  View Companies
                  <div className="flex gap-[1.7] bg-iconbg p-[1.7px] rounded-[6px]">
                    <img src="/CheckiconCircle.svg"  alt="Icon"/>
                    <img src="/AlertIcon.svg" alt="alert" />
                    <img src="/Icons10Block.svg" alt="Icon 10 Block" />
                  </div>
                  </li>
                </ul> 
              </div>
            </div>
        </div> 
      )}
    </>
  );
}

export default ChatInput;
