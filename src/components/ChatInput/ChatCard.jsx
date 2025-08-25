import Button from "../Button/Button"

function ChatInput({ placeholderText }) {
  return (
    <div className='min-w-[645px] sm:min-w-[100%] mx-auto bg-[#ffffff66] py-5 border-[0.5px] px-5 rounded-[32px] border-white justify-between flex flex-col min-h-[150px] relative overflow-hidden backdrop-blur-sm shadow-lg'>
      <div className="absolute w-full h-full bg-[#0000000f] top-0 left-0"></div>
      <div className="w-full py-2 placeholder-black text-left bg-transparent border-transparent focus:border-transparent focus:ring-0 outline-none relative resize-none">
        {placeholderText}
      </div>
      <div className='flex justify-between items-center sm:gap-2'>
        <div className='flex items-center gap-3 relative'>
          <img src='/attherat.svg' alt="@ icon" />
          <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[5px] pr-[15px] py-[5px] items-center shadow-lg hover:!translate-y-[0px] sm:!text-[12px]'>
            <img src='/github-icon.svg' className="sm:h-[16px]" alt="GitHub icon" />GitHub <img src='/cross-icon.svg' alt="Cross icon"/>
          </Button>
          <Button className='flex gap-1 !bg-[#d9d9d966] !text-primary border-[1px] border-white px-[5px] pr-[15px] py-[5px] items-center shadow-lg hover:!translate-y-[0px] sm:!text-[12px]'>
            <img src='/jira-icon.svg' className="sm:h-[16px]" alt="Jira icon" />Jira <img src='/cross-icon.svg' alt="Cross icon"/>
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
  );
}

ChatInput.defaultProps = {
  placeholderText: <>Create a draft pull request on <b>@GitHub</b> for my ticket on <b>@Jira</b></>
};

export default ChatInput;
