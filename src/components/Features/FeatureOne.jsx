import Button from "../Button/Button"
import ChatInput from "../ChatInput/ChatCard"

export default function FeatureOne(){
    return(
    <div className='grid grid-cols-2 gap-10 items-center py-20 sm:grid-cols-1 sm:py-10'>
        <img src="/featureOne.webp" className="absolute right-[-2%] mt-[-50px] opacity-[50%]" />
        <div className='col px-5 relative'>
            <div className='flex flex-col gap-2'>
                <span className='max-w-[110px] text-center font-sora text-[14px] bg-bgdark text-white py-[4px] px-[16px] rounded-full font-normal'>FEATURE 1</span>
                <h3 className='text-primary font-normal text-[48px] sm:text-[36px] leading-[40px] mt-[10px]'>Choose your tools</h3>
                <p className='font-noto text-[18px] text-black40 pt-2'>Need to be the one in charge? Add tools with a simple <br/> @mention. By default, I read, but must ask to make changes.</p> 
            </div>                
            {/* how it work */}
            <div className='relative py-10'>
            <strong className='text-textcolor text-[18px] font-sora'>How it works:</strong>
                <ul className="space-y-3 py-3">
                <li className="flex items-start gap-3">
                    <span className="bg-circleBg text-textcolor w-6 h-6 rounded-full flex items-center justify-center">
                    1
                    </span>
                    <span className="text-secondary font-sora text-[16px] font-normal">Write a prompt.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-circleBg text-textcolor w-6 h-6 rounded-full flex items-center justify-center">
                    2
                    </span>
                    <span className="text-secondary font-sora text-[16px] font-normal">
                    @mention tools that I should use.
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-circleBg text-textcolor w-6 h-6 rounded-full flex items-center justify-center">
                    3
                    </span>
                    <span className="text-secondary font-sora text-[16px] font-normal">
                    I do the work only with the chosen tools.
                    </span>
                </li>
                </ul>
            </div>
        </div>
        <div className='relative sm:hidden'>
           <ChatInput
              placeholderText={<>look what I did since yesterdayon <b>@github</b>. update me about <b>@Jira</b>. fetch new issues on <b>@</b></>}
              showDropdown={true}
              className="!min-w-[543px] sm:!min-w-[100%]" 
           /> 
        </div>
        <div className="hidden sm:block md:hidden">
          <img src="/CardImage.webp" alt="" className="sm:w-full sm:object-cover"/>
        </div>
    </div>        
    )
}
