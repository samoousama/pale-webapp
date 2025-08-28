import Button from "../Button/Button"
import ChatInput from "../ChatInput/ChatCard"

export default function FeatureTwo(){
    return(
    <div className='grid grid-cols-2 gap-10 py-20 sm:grid-cols-1 sm:flex-col-reverse'>
        <img src="/FeatureTwo.webp" className="absolute left-0 mt-[-150px] opacity-[50%]" />
        <div className='relative'>
           <ChatInput
            placeholderText={<>look what i did since yesterday on <b>@GitHub</b>. update me about <b>@Jira</b>. fetch new issues on <b>@Sentry</b>. Suggest to me what to work on Today.</>}
            showSuggest={true}
            className="!min-w-[600px] sm:!min-w-[100%]"
           />
        </div>
        <div className='col px-5 relative pl-20 sm:px-0 md:pl-0'>
            <div className='flex flex-col gap-2'>
                <span className='max-w-[110px] text-center font-sora text-[14px] bg-bgdark text-white py-[4px] px-[16px] rounded-full'>FEATURE 2</span>
                <h3 className='text-primary sm:text-[36px]'>Set the tracks</h3>
                <p className='font-noto text-[18px] text-black40 pt-2'>Don't lose focus. Prompt and permissions go together. Your tools, your rules. Stay in charge the whole way.</p> 
            </div>                
            <div className='relative py-10 flex items-center gap-4'>
              <img src="/PromptIcon.svg" alt="Promt Icon"/>      
              <div className="relative">
                <div className="flex items-center gap-1">
                    <span className="flex items-center gap-1">Allow <img src="/CheckCircle.svg" alt="Check"/> ,</span>
                    <span className="flex items-center gap-1">Ask <img src="/CheckCircle.svg" alt="Check"/> </span>
                    <span className="flex items-center gap-1">, or Disable <img src="/ForbiddenCircle.svg" alt="Check"/></span>
                </div>
                <p className="font-noto text-[16px] text-black40">For every prompt you choose the permissions.</p>
              </div>
            </div>
        </div> 
    </div>   
    )
}
