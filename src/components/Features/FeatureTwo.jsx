import Button from "../Button/Button"

export default function FeatureTwo(){
    return(
    <div className='grid grid-cols-2 gap-10 py-20 sm:grid-cols-1 sm:flex-col-reverse'>
        <img src="/feature--2.png" className="absolute left-0 mt-[-150px] opacity-[50%]" />
        <div className='relative'>
           <div className='min-w-[450px] sm:min-w-[100%] md:min-w-[100%] mx-auto bg-[#ffffff66] py-5 border-[1px] border-[#fff] px-5 rounded-[32px] justify-between flex flex-col h-[150px] relative overflow-hidden backdrop-blur-sm shadow-lg'>
             <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>
              <textarea name="" placeholder='look what i did since yesterday on @GitHub. update me about @Jira. fetch new issues on @Sentry. Suggest to me what to work on Today.' className='w-full py-2 placeholder-black bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none relative resize-none'></textarea>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 relative'>
                  <img src='/attherat.svg' />
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[5px] pr-[15px] py-[5px] items-center shadow-lg hover:!translate-y-[0px] sm:!text-[12px] md:!text-[12px]'><img src='/github-icon.svg' className="sm:h-[16px]" />GitHub <img src='/cross-icon.svg'/></Button>
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[5px] pr-[15px] py-[5px] items-center shadow-lg hover:!translate-y-[0px] sm:!text-[12px] md:!text-[12px]'><img src='/jira-icon.svg' className="sm:h-[16px]" />Jira <img src='/cross-icon.svg'/></Button>
                  <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[5px] pr-[15px] py-[5px] items-center shadow-lg hover:!translate-y-[0px] sm:!text-[12px] md:!text-[12px]'><img src='/sentry.svg' className="sm:h-[16px]" />Sentry <img src='/cross-icon.svg'/></Button>
                </div>
                <div className='flex justify-between items-center gap-4 sm:gap-1'>
                  <img src='/signIcon.svg' alt='' className='h-[16px]' />
                  <Button className='w-[35px] h-[35px] !p-0 !flex !items-center !text-center justify-center'><img src='/buttonArrow.svg' /></Button>
                </div>
              </div>
            </div>
            <div className="bg-[#ffffff66] py-4 border-[1px] border-[#fff] px-4 rounded-[32px] justify-between flex flex-col max-w-[270px] relative shadow-lg relative overflow-hidden backdrop-blur-sm z-40 ml-10 mt-[-10px]">
              <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>
               <div className="dropdown relative">
                 <a href="#" className="flex justify-between items-center">
                  <p className="font-sora text-[11px] text-[#020203] flex gap-2"><img src="/eye-icon.svg" />Reads</p>
                  <img src="/dropdown-icon.svg" />
                 </a> 
                 <div className="bg-[#78788014] rounded-[12px] py-3 px-3 my-3 mb-6">
                   <ul>
                     <li className="font-sora text-[12px] text-[#020203] flex justify-between items-center border-b-[1px] border-[#0000001a] pb-2">
                      Create Contacts
                      <div className="flex gap-1 bg-[#7878801f] px-1 py-1 rounded-[5px]">
                        <img src="/icons8-block.svg" />
                        <img src="/icons9-block.svg" />
                        <img src="/icons10-block.svg" />
                      </div>
                     </li>
                     <li className="font-sora text-[12px] text-[#020203] flex justify-between items-center pt-2">
                      Delete Companies
                      <div className="flex gap-1 bg-[#7878801f] px-1 py-1 rounded-[5px]">
                        <img src="/icons8-block.svg" />
                        <img src="/icons9-block.svg" />
                        <img src="/icons10-block.svg" />
                      </div>
                     </li>
                   </ul> 
                 </div>
               </div>
               <div className="dropdown relative">
                 <a href="#" className="flex justify-between items-center">
                  <p className="font-sora text-[11px] text-[#020203] flex gap-2"><img src="/eye-icon.svg" />Changes</p>
                  <img src="/dropdown-icon.svg" />
                 </a> 
                 <div className="bg-[#78788014] rounded-[12px] py-2 px-3 my-2 mb-0">
                   <ul>
                     <li className="font-sora text-[12px] text-[#020203] flex justify-between items-center border-b-[1px] border-[#0000001a] pb-2">
                      View Contacts
                      <div className="flex gap-1 bg-[#7878801f] px-1 py-1 rounded-[5px]">
                        <img src="/checkicon-circle.svg" />
                        <img src="/alert-icon.svg" />
                        <img src="/icons10-block.svg" />
                      </div>
                     </li>
                     <li className="font-sora text-[12px] text-[#020203] flex justify-between items-center pt-2">
                      View Companies
                      <div className="flex gap-1 bg-[#7878801f] px-1 py-1 rounded-[5px]">
                        <img src="/checkicon-circle.svg" />
                        <img src="/alert-icon.svg" />
                        <img src="/icons10-block.svg" />
                      </div>
                     </li>
                   </ul> 
                 </div>
               </div>
            </div>
        </div>
        <div className='col px-5 relative pl-20 sm:px-0 md:pl-0'>
            <div className='flex flex-col gap-2'>
                <span className='max-w-[95px] text-center font-sora text-[14px] bg-bgdark text-white py-[2px] px-2 rounded-full'>FEATURE 2</span>
                <h3 className='text-primary sm:text-[36px]'>Set the tracks</h3>
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