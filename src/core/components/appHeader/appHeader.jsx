import React, { useState } from 'react';
import iconCard from "../../../assets/card/shopping-card.svg";
import { AppInput } from '../appInput/appInput';
import { AppContainer } from '../appCart/appContainer';

export const AppHeader = (props) => {
  const [open, setOpen] = useState(false);
  const { count } = props;

  return (
    <>
      <header className="bg-transparent">
        <div className="mx-auto max-w-screen lg:px-4 py-2 ">
          <div className="flex items-center justify-between ">
            <div className="relative ">
              <label className="sr-only" htmlFor="search"> Search </label>
              <AppInput
                id="search"
                type="search"
                placeholder="Search"
              />
              <button
                type="button"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-[#2B2B2B]/10 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-8 justify-end relative">
              <button
                className='w-10 h-10 bg-[#E46205] rounded-full p-2 hover:bg-[#E46205]/60 relative'
                onClick={() => setOpen(!open)}
              >
                <img src={iconCard} className='w-full h-full' alt="Shopping Cart" />
                {count > 0 && (
                    <div className='w-5 h-5 bg-[#000] rounded-full flex items-center justify-center absolute -top-2 -right-2'>
                  <span className="text-white font-semibold text-sm absolute  text-center">
                    {count}
                  </span>
                    </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open &&
        <div className="justify-end items-start flex overflow-x-hidden overflow-y-auto fixed z-50 outline-none inset-0  focus:outline-none" onClick={() => setOpen(false)}>
          <div className="relative w-full right-0 my-6  max-w-[450px]">
            {/*content*/}
            <div className="border-0 rounded-full relative flex flex-col w-full outline-none focus:outline-none">
              {/*header*/}

              {/*body*/}
              <div className="relative px-12 lg:px-3 pt-[5.5rem] lg:pt-16 flex-auto" >
                <AppContainer />
              </div>
              {/*footer*/}
            </div>
          </div>
        </div>
      }
    </>
  );
}
