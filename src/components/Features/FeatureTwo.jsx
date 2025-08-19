export default function FeatureTwo(){
    return(
    <div className='grid grid-cols-2 gap-10 py-20'>
        <img src="/feature--2.png" className="absolute left-0 mt-[-150px] opacity-[50%]" />
        <div className='relative'>
           <img src='/tracks-img.png' alt="Tracks"/>
        </div>
        <div className='col px-5 relative pl-20'>
            <div className='flex flex-col gap-2'>
                <span className='max-w-[95px] text-center font-sora text-[14px] bg-bgdark text-white py-[2px] px-2 rounded-full'>FEATURE 2</span>
                <h3 className='text-primary'>Set the tracks</h3>
                <p className='font-noto text-[18px] text-[#00000099] pt-2'>Don't loose focus. Prompt and permissions go together. Your tools, your rules. Stay in charge the whole way.</p> 
            </div>                
            <div className='relative py-10 flex items-center gap-4'>
              <img src="/prompt-icon.svg"/>      
              <div className="relative">
                <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1">Allow <img src="/check-circle.svg" alt="Check"/> ,</span>
                    <span className="flex items-center gap-1">Ask <img src="/check-circle.svg" alt="Check"/> </span>
                    <span className="flex items-center gap-1">, or Disable <img src="/forbidden-circle.svg" alt="Check"/></span>
                </div>
                <p className="font-noto text-[16px] text-[#00000099]">For every prompt you choose the permissions.</p>
              </div>
            </div>
        </div>
    </div>   
    )
}