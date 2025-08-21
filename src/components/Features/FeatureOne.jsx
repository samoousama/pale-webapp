import Button from "../Button/Button"

export default function FeatureOne(){
    return(
    <div className='grid grid-cols-2 gap-10 items-center py-20 sm:grid-cols-1'>
        <img src="/feature--1.png" className="absolute right-[-2%] mt-[-50px] opacity-[50%]" />
        <div className='col px-5 relative'>
            <div className='flex flex-col gap-2'>
                <span className='max-w-[95px] text-center font-sora text-[14px] bg-bgdark text-white py-[2px] px-2 rounded-full'>FEATURE 1</span>
                <h3 className='text-primary font-normal text-[48px]'>Choose your tools</h3>
                <p className='font-noto text-[18px] text-[#00000099] pt-2'>Need to be the one in charge? Add tools with a simple <br/> @mention. By default, I read, but must ask to make changes.</p> 
            </div>                
            {/* how it work */}
            <div className='relative py-10'>
            <strong className='text-[#2D0F00] text-[18px] font-sora'>How it works:</strong>
                <ul className="space-y-3 py-3">
                <li className="flex items-start gap-3">
                    <span className="bg-[#F5B899] text-[#2D0F00] w-6 h-6 rounded-full flex items-center justify-center">
                    1
                    </span>
                    <span className="text-secondary font-sora text-[16px] font-medium">Write a prompt.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-[#F5B899] text-[#2D0F00] w-6 h-6 rounded-full flex items-center justify-center">
                    2
                    </span>
                    <span className="text-secondary font-sora text-[16px] font-medium">
                    @mention tools that I should use.
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-[#F5B899] text-[#2D0F00] w-6 h-6 rounded-full flex items-center justify-center">
                    3
                    </span>
                    <span className="text-secondary font-sora text-[16px] font-medium">
                    I do the work only with the chosen tools.
                    </span>
                </li>
                </ul>
            </div>
        </div>
        <div className='relative'>
            <div className="bg-[#ffffff66] py-5 border-[1px] border-[#fff] px-2 rounded-[32px] justify-between flex flex-col max-w-[250px] mx-auto relative shadow-lg relative overflow-hidden backdrop-blur-sm z-40">
              <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>
               <ul className="space-y-1 relative">
                <li className="flex justify-between items-center py-3 px-3 rounded-full">
                  <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                    <img src="/hubspot.svg" alt=""/>
                    HubSpot
                  </div>  
                  <img src="/Clock-Circle.svg"/>
                </li>
                <li className="flex justify-between items-center py-3 px-3 rounded-full">
                  <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                    <img src="/github-icon.svg" alt=""/>
                    GitHub
                  </div>  
                  <img src="/checkicon.svg"/>
                </li>
                <li className="flex justify-between items-center py-3 px-3 rounded-full">
                  <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                    <img src="/insta-icon.svg" alt=""/>
                    Instagram
                  </div>  
                  <img src="/Clock-Circle.svg"/>
                </li>
                <li className="flex justify-between items-center py-3 px-3 rounded-full">
                  <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                    <img src="/drive.svg" alt=""/>
                    Drive
                  </div>  
                  
                </li>
                <li className="flex justify-between items-center py-3 bg-[#0000001a] px-3 rounded-full">
                  <div className="font-sora text-primary text-[15px] flex gap-2 items-center">
                    <img src="/sentry.svg" alt=""/>
                    Sentry
                  </div>  
                </li>                
               </ul> 
            </div>
            <div className='min-w-[500px] sm:min-w-[100%] mx-auto bg-[#ffffff66] py-2 pb-3 border-[1px] border-[#fff] px-5 rounded-[32px] justify-between flex flex-col h-[150px] shadow-lg mt-[-35px] backdrop-blur-sm relative overflow-hidden'>
                <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>
                <textarea name="" placeholder='look what I did since yesterdayon @github. update me about &#10; @Jira. fetch new issues on @' className='w-full py-2 placeholder-black bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none relative resize-none'></textarea>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 relative'>
                    <img src='/attherat.svg' />
                    <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[10px] py-[5px] items-center'><img src='/github-icon.svg' />GitHub <img src='/cross-icon.svg'/></Button>
                    <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[10px] py-[5px] items-center'><img src='/jira-icon.svg' />Jira <img src='/cross-icon.svg'/></Button>
                </div>
                <div className='flex justify-between items-center gap-4 sm:gap-1'>
                    <img src='/signIcon.svg' alt='' className='h-[16px]' />
                    <Button className='w-[35px] h-[35px] !p-0 !flex !items-center !text-center justify-center'><img src='/buttonArrow.svg' /></Button>
                </div>
                </div>
            </div> 
        </div>
    </div>        
    )
}