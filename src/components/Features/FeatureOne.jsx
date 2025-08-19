export default function FeatureOne(){
    return(
    <div className='grid grid-cols-2 gap-10 items-center py-20 relative overflow-hidden'>
        
        <div className='col px-5 relative'>
            <div className='flex flex-col gap-2'>
                <span className='max-w-[95px] text-center font-sora text-[14px] bg-bgdark text-white py-[2px] px-2 rounded-full'>FEATURE 1</span>
                <h3 className='text-primary'>Choose your tools</h3>
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
                    <span className="text-secondary font-sora text-[16px]">Write a prompt.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-[#F5B899] text-[#2D0F00] w-6 h-6 rounded-full flex items-center justify-center">
                    2
                    </span>
                    <span className="text-secondary font-sora text-[16px]">
                    @mention tools that I should use.
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="bg-[#F5B899] text-[#2D0F00] w-6 h-6 rounded-full flex items-center justify-center">
                    3
                    </span>
                    <span className="text-secondary font-sora text-[16px]">
                    I do the work only with the chosen tools.
                    </span>
                </li>
                </ul>
            </div>
        </div>
        <div className='relative'>
            <img src='/feature-img.png'/>
        </div>
    </div>        
    )
}