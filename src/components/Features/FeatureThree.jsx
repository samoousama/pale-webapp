import Button from "../Button/Button";

export default function FeatureThree(){
    return(
       <div className='grid grid-cols-2 gap-10 py-20 sm:grid-cols-1'>
        <img src="/jirabox-images.png" className="absolute right-[-10%] mt-[-50px] opacity-[50%]" />
        <div className='col px-5 relative'>
            <div className='flex flex-col gap-2'>
                <span className='max-w-[95px] text-center font-sora text-[14px] bg-bgdark text-white py-[2px] px-2 rounded-full'>FEATURE 3</span>
                <h3 className='text-primary'>Stay on course</h3>
                <p className='font-noto text-[18px] text-[#00000099] pt-2'>With the 'Ask' permission you take command.I ask for permission, never for forgiveness. </p> 
            </div>          
            <div className="py-10 flex flex-col gap-10">
                <div className='flex items-center gap-4'>
                    <img src="/reveal-icon.svg"/>      
                    <div className="relative">
                        <span className="flex items-center gap-1">Raise the curtain</span>
                        <p className="font-noto text-[16px] text-[#00000099]">Reveal the request parameters.</p>
                    </div>
                </div>      
                <div className='flex items-center gap-4'>
                    <img src="/skip-icon.svg"/>      
                    <div className="relative">
                        <span className="flex items-center gap-1">Run or Skip</span>
                        <p className="font-noto text-[16px] text-[#00000099]">To make sure we're on the same track.</p>
                    </div>
                </div>                           
            </div>      
        </div>
        <div className='relative'>
            <p className="font-noto text-[18px] text-[#00000099] px-2 pb-4">Let me check your current Jira tickets...</p>
            <div className='min-w-[500px] sm:min-w-[100%] mx-auto bg-[#ffffff66] py-4 border-[1px] border-[#fff] px-5 rounded-[32px] flex flex-col backdrop-blur-sm relative overflow-hidden'>
              <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>  
              <div className="flex justify-between items-center">
                <p className="font-sora text-[17px] text-[#121212]">Calling list-tickets@Jira</p>
                <a href="" className="font-sora text-[14px] text-[#00000080] flex items-center gap-1">Request json <img src="/arrowup.svg"/></a>
              </div>
              <div className="pt-7">
                <strong className="font-semibold font-sora text-[#141414]">Request</strong>
                <img src="/json-img.svg" className="w-full my-2"/>
              </div>
              <div className="flex justify-between items-center sm:gap-2">
                <div>
                  <div className="flex items-center bg-[#0000000f] px-5 py-2 rounded-[12px] gap-3 sm:text-[14px] sm:mt-[8px]">
                    Always Ask <img src="/arrowdown.svg" />
                  </div>
                </div>    
                <div className="flex gap-4 pt-2">
                  <Button className="rounded-[13px] !bg-[#ffffff66] !text-primary">Skip</Button>  
                  <Button className="!bg-accent rounded-[13px] !text-primary hover:!text-white">Run</Button>  
                </div>    
              </div>
            </div>
        </div>
    </div>   
    )
}