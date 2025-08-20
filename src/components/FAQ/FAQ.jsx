import { useState } from "react";
import Button from "../Button/Button"

const faqs = [
  { question: "What workflows can I automate with AI?", answer: "You can automate repetitive workflows such as document processing, email handling, and data entry with AI." },
  { question: "Why not use existing automation platforms?", answer: "Our platform is designed with AI-first principles, offering smarter decision-making and adaptability compared to traditional tools." },
  { question: "Is it free?", answer: "We offer a free plan with core features. Paid plans unlock advanced capabilities." },
  { question: "How do I get started?", answer: "Simply sign up for an account, explore templates, and start automating your workflows in minutes." },
  { question: "What's your policy on file upload privacy?", answer: "All uploaded files are securely stored and processed. We don’t share your data with third parties." },
];

export default function FAQ(){
    const [openIndex, setOpenIndex] = useState(null);
    return(
        <div className="bg-white py-16 border-t-[1px] border-[#0000001a] border-b-[1px]">
          <div className="container">
            <h3 className="text-center">Other users asked me this</h3>
            <div className="grid grid-cols-3 pt-10 max-w-[973px] mx-auto gap-20 sm:grid-cols-1 sm:max-w-[100%] sm:justify-center sm:text-center sm:gap-5">
              <div className="relative sm:text-center">
                <strong className="text-primary font-sora text-[32px] font-medium max-w-[150px] sm:max-w-full block leading-[40px]">Still have questions?</strong>
                <p className="font-noto text-[18px] text-[#00000099] pt-3">Reach out to my founders anytime.</p>
                 <Button className="mt-6 w-full !text-[#2D0F00] !bg-[#FDC7AF] hover:!bg-primary py-2 font-sora font-semibold text-[15px] shadow-sm mt-10 max-w-[140px] flex items-center justify-center gap-1 hover:!text-white group sm:justify-center sm:items-center sm:mx-auto sm:mt-5">
                    Let's talk <img src="/arrowIcon.svg" alt="Arrow" className="group-hover:invert"/>
                </Button>
              </div>  
              <div className="col-span-2">
               <div className="w-full mx-auto">
                <div className="space-y-3">
                    {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#E5E5E5] pb-3">
                        <button
                            className="flex justify-between items-center w-full text-left text-[18px] font-noto text-[#00000099] py-2"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                        <span>{faq.question}</span>
                        {openIndex === idx ? (
                            <img src="/arrowdown.svg" alt="up" className="w-5 h-5" />
                        ) : (
                            <img src="/arrowup.svg" alt="down" className="w-5 h-5" />
                        )}
                        </button>
                        {openIndex === idx && (
                            <p className="mt-2 text-[18px] font-noto text-[#00000099]">{faq.answer}</p>
                        )}
                    </div>
                    ))}
                </div>
                </div>
              </div>  
            </div>
          </div>      
        </div>
    )
}