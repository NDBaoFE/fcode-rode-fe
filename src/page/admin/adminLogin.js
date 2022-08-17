import React, { useState } from 'react'

const AdminLogin = () => {
  const [account, setAccount] = useState({ username: '', password: '' })

  const handleFormChange = (event) => {
    // console.log(event)
    setAccount({ ...account, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    alert(account.username + ' ' + account.password)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="min-h-screen min-w-screen flex">
        <div className="m-auto w-[28rem] h-[32rem] rounded-lg shadow-2xl bg-white">
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
                    name="username"
                    value={account.username}
                    onChange={(event) => handleFormChange(event)}
                    placeholder="Username"
                    className="border border-0-[#11181C] bg-[#68707610] text-sm font-semibold py-2 px-4 rounded-lg focus:outline-none"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handleSubmit()
                      }
                    }}
                  />
                </div>
                <div className="my-2">
                  <input
                    type="password"
                    name="password"
                    value={account.password}
                    onChange={(event) => handleFormChange(event)}
                    placeholder="Password"
                    className="border border-0-[#11181C] bg-[#68707610] text-sm font-semibold py-2 px-4 rounded-lg focus:outline-none"
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handleSubmit()
                      }
                    }}
                  />
                </div>
                <div
                  onClick={handleSubmit}
                  className="p-2 my-6 text-white bg-[#1b171f] text-sm w-1/4 mx-auto rounded-lg cursor-pointer hover:text-[#f7f7f7] hover:bg-[#4e425f] duration-300 "
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
      </div>
    </div>
  )
}

export default AdminLogin
