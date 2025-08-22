export default function Footer() {
    return(
        <div className="overflow-hidden relative">
          {/* <img src='/shadowbg-img.svg' alt='' className='absolute top-0 bottom-0 object-cover' /> */}
          <div className="py-16 pb-20 border-b-[1px] border-[#0000001a] border-b-[1px] relative overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-3 justify-between sm:grid-cols-1">
                <div className="logo sm:text-center sm:flex sm:justify-center sm:mb-5">
                    <a href="/">
                    <img src="/logo.svg" alt="Logo"/>  
                    </a>
                </div>  
                <div className="col-span-2">
                 <div className="flex gap-30 justify-between sm:gap-10 sm:flex-col">
                    <div className="flex gap-16">
                        <div className="relative">
                            <h4 className="font-sora text-[12px] text-[#260f1466] uppercase tracking-[.25em]">Products</h4>  
                            <ul className="space-y-5 pt-5">
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Product Overview
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Real-Time Decision Log
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Checks & Alerts
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Execution AI Agents
                                    </a>
                                </li>
                            </ul>
                            </div>
                            <div className="relative">
                            <h4 className="font-sora text-[12px] text-[#260f1466] uppercase tracking-[.25em]">Resources</h4>  
                            <ul className="space-y-5 pt-5">
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>                                
                    </div>                
                    <div className="flex gap-16">
                        <div className="relative">
                            <h4 className="font-sora text-[12px] text-[#260f1466] uppercase tracking-[.25em]">Company</h4>  
                            <ul className="space-y-5 pt-5">
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Why Pale
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Referral Program
                                    </a>
                                </li>
                            </ul>
                            </div>
                            <div className="relative">
                            <h4 className="font-sora text-[12px] text-[#260f1466] uppercase tracking-[.25em]">Resources</h4>  
                            <ul className="space-y-5 pt-5">
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-primary hover:text-primary transition-colors font-noto font-normal">
                                        Events
                                    </a>
                                </li>
                            </ul>
                        </div>                                
                    </div>                
                 </div>     
               </div>
              </div>
            </div>   
          </div>  
          <div className="py-6">
            <div className="container">
              <div className="flex items-center gap-20 relative sm:gap-5">
                 <p className="font-noto text-[12px] text-[#00000099]">© Pale 2025. All rights reserved.</p>
                 <ul className="space-x-5 flex pl-20 sm:pl-0">
                    <li>
                        <a href="#" className="text-primary hover:text-primary transition-colors font-noto text-[12px] sm:text-[10px]">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-primary hover:text-primary transition-colors font-noto text-[12px] sm:text-[10px]">
                            Terms of Service
                        </a>
                    </li>
                </ul>
              </div>  
            </div>
          </div>
        </div>
    )
}