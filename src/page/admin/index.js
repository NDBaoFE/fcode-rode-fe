import React from 'react'

// import { Route } from 'react-router-dom'

const Admin = () => {
  const LoginBox = () => {
    return (
      <div className="m-auto w-[28rem] h-[32rem] rounded-lg shadow-2xl">
        <div className="flex h-full">
          <div className="mx-auto relative py-6 w-full">
            <div className="absolute top-[7rem] mx-auto w-full text-center item-center">
              {/* <img src={Avatar} alt="Avatar" className="w-1/4 mx-auto rounded-lg" /> */}
              <h2 className="text-xl pt-6 pb-2 text">
                <span className="font-black">R.ODE Battle</span>
              </h2>
              <h3 className="text-xs">Managing page for ad</h3>
              <div className="border border-[#C4C4C4] border-b-0 w-1/4 mx-auto my-6"></div>
              <div className="my-2">
                <input
                  type="text"
                  className="border border-0-[#11181C] bg-[#68707610] text-sm font-semibold py-2 px-4 rounded-lg focus:outline-none"
                />
              </div>
              <div className="my-2">
                <input
                  type="password"
                  className="border border-0-[#11181C] bg-[#68707610] text-sm font-semibold py-2 px-4 rounded-lg focus:outline-none"
                />
              </div>
              <div
                // onClick={handleLogin}
                className="p-2 text-white bg-[#1b171f] text-sm w-1/4 mx-auto rounded-lg cursor-pointer hover:text-[#f7f7f7] duration-300"
              >
                Log in
              </div>
            </div>
            <div className="absolute bottom-6 mx-auto w-full text-center">
              <h4 className="text-xs">
                Design by{' '}
                <a
                  href="https://f-code.tech/"
                  className="font-semibold ease-in-out duration-300 hover:opacity-80 cursor-pointer"
                >
                  F-Code Team.
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="min-h-screen min-w-screen flex">
        <LoginBox />
      </div>
    </div>
  )
}

export default Admin
