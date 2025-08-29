import { useState } from 'react';
import Button from '../Button/Button';
import { SIGNUP_FORM_LINK } from '../../App';

export default function PricePackages() {
  const [activeTab, setActiveTab] =
    useState('individual');
  return (
    <div className='py-20 pt-40' id='pricing'>
      <div className='container'>
        <div className='text-center flex flex-col gap-2'>
          <h3 className='text-primary sm:text-[35px]'>
            Move at your pace
          </h3>
          <p className='font-noto text-[18px] text-black40'>
            Empower your team for free. Upgrade to
            get more of my attention.{' '}
          </p>
        </div>
        <div className='w-full'>
          {/* <div className="table mx-auto items-center text-center justify-center bg-[#f5b8994d] rounded-[50px]">
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
                </div> */}
          {/* Content area packages */}
          <div className='relative'>
            {activeTab === 'individual' && (
              <div className='grid grid-cols-3 gap-5 pt-14 sm:grid-cols-1'>
                <div className='rounded-[32px] border-[1px] bg-WhiteSmoke py-12 px-7 flex flex-col gap-1'>
                  <h4 className='text-primary text-[24px] font-sora font-semibold'>
                    Free
                  </h4>
                  <p className='font-noto text-[16px] text-black40'>
                    Try Pale
                  </p>
                  <p className='text-3xl font-sora font-bold text-primary pt-5'>
                    $0{' '}
                    <span className='text-[12px] font-noto text-black40'>
                      / month billed annually
                    </span>
                  </p>
                  <a
                    href={
                      SIGNUP_FORM_LINK +
                      '?utm_source=website&utm_medium=pricing&utm_campaign=free'
                    }
                    target='_blank'
                  >
                    <Button className='mt-6 w-full !text-textcolor bg-white border-[1px] py-3 font-sora font-semibold text-[15px] shadow-sm hover:!text-white'>
                      Get a Free Plan
                    </Button>
                  </a>
                  <ul className='mt-6 space-y-3 text-darktext'>
                    <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                      <img
                        src='/CheckIcon.svg'
                        alt='Check Icon'
                      />
                      One-click integrations
                    </li>
                    <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                      <img
                        src='/CheckIcon.svg'
                        alt='Check Icon'
                      />
                      Connect any tool through
                      remote MCP
                    </li>
                  </ul>
                </div>
                <div className='rounded-[32px] bg-gradient-to-r from-[#EFB293] to-[#F1B697] flex flex-col gap-1 p-[5px]'>
                  <div className='bg-white py-12 px-7 flex flex-col gap-1 h-full rounded-[32px] border-[2px] border-textcolor'>
                    <h4 className='text-primary text-[24px] font-sora font-semibold'>
                      Pro
                    </h4>
                    <p className='font-noto text-[16px] text-black40'>
                      For everyday productivity
                    </p>
                    <p className='text-3xl font-sora font-bold text-primary pt-5'>
                      $25{' '}
                      <span className='text-[12px] font-noto text-black40'>
                        / month billed annually
                      </span>
                    </p>
                    <a
                      href={
                        SIGNUP_FORM_LINK +
                        '?utm_source=website&utm_medium=pricing&utm_campaign=pro'
                      }
                      target='_blank'
                    >
                      <Button className='mt-6 w-full !text-textcolor !bg-accent hover:!bg-primary border-[1px] border-Gray90 py-3 font-sora font-semibold text-[15px] shadow-sm hover:!text-white'>
                        Get a Pro Plan
                      </Button>
                    </a>
                    <ul className='mt-6 space-y-3 text-darktext'>
                      <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                        <img
                          src='/CheckIcon.svg'
                          alt='Check Icon'
                        />
                        More usage
                      </li>
                      <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                        <img
                          src='/CheckIcon.svg'
                          alt='Check Icon'
                        />
                        Ability to use more LLM
                        models
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='rounded-[32px] border-[1px] bg-WhiteSmoke py-12 px-7 flex flex-col gap-1'>
                  <h4 className='text-primary text-[24px] font-sora font-semibold'>
                    Max
                  </h4>
                  <p className='font-noto text-[16px] text-black40'>
                    5-20x more usage than Pro
                  </p>
                  <p className='text-3xl font-sora font-bold text-primary pt-5'>
                    From $100{' '}
                    <span className='text-[12px] font-noto text-black40'>
                      / month billed annually
                    </span>
                  </p>
                  <a
                    href={
                      SIGNUP_FORM_LINK +
                      '?utm_source=website&utm_medium=pricing&utm_campaign=max'
                    }
                    target='_blank'
                  >
                    <Button className='mt-6 w-full !text-textcolor bg-white border-[1px] border-Gray90 py-3 font-sora font-semibold text-[15px] shadow-sm hover:!text-white'>
                      Get Max Plan
                    </Button>
                  </a>
                  <ul className='mt-6 space-y-3 text-darktext'>
                    <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                      <img
                        src='/CheckIcon.svg'
                        alt='Check Icon'
                      />
                      Choose 5x or 20x more usage
                      than Pro
                    </li>
                    <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                      <img
                        src='/CheckIcon.svg'
                        alt='Check Icon'
                      />
                      Higher output limits for all
                      tasks
                    </li>
                    <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                      <img
                        src='/CheckIcon.svg'
                        alt='Check Icon'
                      />
                      Early access to advanced
                      features
                    </li>
                    <li className='flex items-center gap-2 text-[14px] font-noto text-black40'>
                      <img
                        src='/CheckIcon.svg'
                        alt='Check Icon'
                      />
                      Priority access at high
                      traffic times
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'team ' && (
              <div className='text-center pt-5'>
                <p className='text-gray-600 mt-2'>
                  Teams ...........
                </p>
              </div>
            )}
          </div>
        </div>
        <p className='pt-5 text-center font-noto text-[18px] text-black40'>
          Prices shown do not include applicable
          tax. *
          <a
            href=''
            className='underline text-darktext'
          >
            Usage limits apply
          </a>
          .
        </p>
      </div>
    </div>
  );
}
