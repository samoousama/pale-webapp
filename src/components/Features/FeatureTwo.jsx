import Button from "../Button/Button"

export default function FeatureTwo(){
    return(
    <div className='grid grid-cols-2 gap-10 py-20 sm:grid-cols-1 sm:flex-col-reverse'>
        <img src="/feature--2.png" className="absolute left-0 mt-[-150px] opacity-[50%]" />
        <div className='relative'>
           <div className='min-w-[450px] sm:min-w-[100%] mx-auto bg-[#ffffff66] py-5 border-[1px] border-[#fff] px-5 rounded-[32px] justify-between flex flex-col h-[150px] relative overflow-hidden backdrop-blur-sm shadow-lg'>
             <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>
              <textarea name="" placeholder='look what i did since yesterday on @GitHub. update me about @Jira. fetch new issues on @Sentry. Suggest to me what to work on Today.' className='w-full py-2 placeholder-black bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none relative'></textarea>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 relative'>
                  <img src='/attherat.svg' />
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[10px] py-[5px] items-center'><img src='/github-icon.svg' />GitHub <img src='/cross-icon.svg'/></Button>
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[10px] py-[5px] items-center'><img src='/jira-icon.svg' />Jira <img src='/cross-icon.svg'/></Button>
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[10px] py-[5px] items-center'><img src='/sentry.svg' />Sentry <img src='/cross-icon.svg'/></Button>
                </div>
                <div className='flex justify-between items-center gap-4 sm:gap-1'>
                  <img src='/signIcon.svg' alt='' className='h-[16px]' />
                  <Button className='w-[35px] h-[35px] !p-0 !flex !items-center !text-center justify-center'><img src='/buttonArrow.svg' /></Button>
                </div>
              </div>
            </div>
        </div>
        <div className='col px-5 relative pl-20 sm:px-0'>
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