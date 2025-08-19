export default function FeatureThree(){
    return(
       <div className='grid grid-cols-2 gap-10 py-20'>
        <img src="/jirabox-images.png" className="absolute right-[-10%] mt-[-50px]" />
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
            <p className="font-noto text-[18px] text-[#00000099] px-7 pb-4">Let me check your current Jira tickets...</p>
            <img src='/jira-ticket-img.svg' alt="Jira"/>
        </div>
    </div>   
    )
}