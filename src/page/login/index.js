import React from 'react'

import Avatar from '../../assets/img/avatar.png'

const Login = () => {
  const handleLogin = () => {
    alert('Pressed login')
  }

  const LoginBox = () => {
    return (
      <div className="m-auto w-[28rem] h-[40rem] bg-modal rounded-lg shadow-lg">
        <div className="flex h-full">
          <div className="mx-auto relative py-6 w-full">
            <div className="absolute top-[7rem] mx-auto w-full text-center text-white item-center">
              <img src={Avatar} alt="Avatar" className="w-1/4 mx-auto rounded-lg" />
              <h2 className="text-xl pt-6 pb-2 text">
                Welcome to <span className="font-black">R.ODE Battle.</span>
              </h2>
              <h3 className="text-xs">R.ODE Battle CSS branch.</h3>
              <div className="border border-[#C4C4C4] border-b-0 w-1/4 mx-auto my-6"></div>
              <div
                onClick={handleLogin}
                className="p-2 bg-[#1b171f] text-sm text-[#777777] w-2/3 mx-auto rounded-lg cursor-pointer hover:text-[#f7f7f7] duration-300"
              >
                Sign in with Google account ⇀
              </div>
            </div>
            <div className="absolute bottom-6 mx-auto w-full text-center text-white">
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
    <div className="h-screen bg-home bg-cover">
      <div className="h-screen w-screen flex">
        <LoginBox />
      </div>
    </div>
  )
}

export default Login
