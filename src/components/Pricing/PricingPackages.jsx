import { useState } from "react";
import Button from "../Button/Button"

export default function PricePackages() {
    const [activeTab, setActiveTab] = useState("individual");
    return(
        <div className="py-20 pt-40" id="pricing">
          <div className="container">
            <div className="text-center flex flex-col gap-2">
              <h3 className="text-primary sm:text-[35px]">Move at your pace</h3>
              <p className="font-noto text-[18px] text-[#00000099]">Empower your team for free. Upgrade to get more of my attention. </p>
            </div>
            <div className="w-full pt-16">
                <div className="table mx-auto items-center text-center justify-center bg-[#f5b8994d] rounded-[50px]">
                    <button
                    onClick={() => setActiveTab("individual")}
                    className={`px-6 py-3 text-sm font-medium transition rounded-full ${
                        activeTab === "individual"
                        ? "text-primary bg-[#d9d9d966] shadow-lg border-[1px] border-white"
                        : "text-[#542208] hover:text-primary"
                    }`}
                    >
                    Individual
                    </button>
                    <button
                    onClick={() => setActiveTab("team")}
                    className={`px-6 py-3 text-sm font-medium transition rounded-full cursor-not-allowed pointer-events-none ${
                        activeTab === "team"
                        ? "text-primary bg-[#d9d9d966] shadow-lg border-[1px] border-white"
                        : "text-[#542208] hover:text-primary"
                    }`}
                    >
                    Team & Enterprise
                    </button>
                </div>
                {/* Content area packages */}
                <div className="relative">
                    {activeTab === "individual" && (
                    <div className="grid grid-cols-3 gap-5 pt-14 sm:grid-cols-1">
                      <div className="rounded-[32px] border-[1px] bg-[#f5b8991a] py-12 px-7 flex flex-col gap-1">
                        <h4 className="text-primary text-[24px] font-sora font-semibold">Free</h4>
                        <p className="font-noto text-[16px] text-[#00000099]">Try Pale</p>
                        <p className="text-3xl font-sora font-bold text-primary pt-5">
                          $0 <span className="text-[12px] font-noto text-[#00000099]">/ month billed annually</span>
                        </p>
                        <Button className="mt-6 w-full !text-[#2D0F00] bg-white border-[1px] border-[#E5E5E5] py-3 font-sora font-semibold text-[15px] shadow-sm hover:!text-white">
                            Get a Free Plan
                        </Button>
                        <ul className="mt-6 space-y-3 text-darktext">
                            <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                <img src="/checkicon.svg" alt="" />
                                One-click integrations
                            </li>
                            <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                <img src="/checkicon.svg" alt="" />
                                Connect any tool through remote MCP
                            </li>
                        </ul>
                      </div>
                      <div className="rounded-[32px] bg-gradient-to-r from-[#EFB293] to-[#F1B697] flex flex-col gap-1 p-[5px]">
                        <div className="bg-white py-12 px-7 flex flex-col gap-1 h-full rounded-[32px] border-[2px] border-[#2D0F00]">
                            <h4 className="text-primary text-[24px] font-sora font-semibold">Pro</h4>
                            <p className="font-noto text-[16px] text-[#00000099]">For everyday productivity</p>
                            <p className="text-3xl font-sora font-bold text-primary pt-5">
                            $17 <span className="text-[12px] font-noto text-[#00000099]">/ month billed annually</span>
                            </p>
                            <Button className="mt-6 w-full !text-[#2D0F00] !bg-[#FDC7AF] hover:!bg-primary border-[1px] border-[#E5E5E5] py-3 font-sora font-semibold text-[15px] shadow-sm hover:!text-white">
                                Get a Pro Plan
                            </Button>
                            <ul className="mt-6 space-y-3 text-darktext">
                                <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                    <img src="/checkicon.svg" alt="" />
                                    More usage
                                </li>
                                <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                    <img src="/checkicon.svg" alt="" />
                                    Ability to use more LLM models
                                </li>
                            </ul>                            
                        </div>    
                      </div>
                      <div className="rounded-[32px] border-[1px] bg-[#f5b8991a] py-12 px-7 flex flex-col gap-1">
                        <h4 className="text-primary text-[24px] font-sora font-semibold">Max</h4>
                        <p className="font-noto text-[16px] text-[#00000099]">5-20x more usage than Pro</p>
                        <p className="text-3xl font-sora font-bold text-primary pt-5">
                          From $100 <span className="text-[12px] font-noto text-[#00000099]">/ month billed annually</span>
                        </p>
                        <Button className="mt-6 w-full !text-[#2D0F00] bg-white border-[1px] border-[#E5E5E5] py-3 font-sora font-semibold text-[15px] shadow-sm hover:!text-white">
                            Get Max Plan
                        </Button>
                        <ul className="mt-6 space-y-3 text-darktext">
                            <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                <img src="/checkicon.svg" alt="" />
                                Choose 5x or 20x more usage than Pro
                            </li>
                            <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                <img src="/checkicon.svg" alt="" />
                                Higher output limits for all tasks
                            </li>
                            <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                <img src="/checkicon.svg" alt="" />
                                Early access to advanced features
                            </li>
                            <li className="flex items-center gap-2 text-[14px] font-noto text-[#00000099]">
                                <img src="/checkicon.svg" alt="" />
                                Priority access at high traffic times
                            </li>
                        </ul>
                      </div>                                             
                    </div>
                    )}
                    {activeTab === "team " && (
                    <div className="text-center pt-5">
                        <p className="text-gray-600 mt-2">
                            Teams ...........
                        </p>
                    </div>
                    )}
                </div>
            </div>
            <p className="pt-5 text-center font-noto text-[18px] text-[#00000099]">Prices shown do not include applicable tax. *<a href="" className="underline text-darktext">Usage limits apply</a>.</p>
          </div>   
        </div>
    )
}