import React, { useState } from 'react'

import LocalStorageUtils from '../../util/LocalStorageUtils'

const Start = () => {
  const [code, setCode] = useState('')

  const handleInputChange = (value) => {
    setCode(value)
  }

  const handleSubmit = async () => {
    alert('Entered: ' + code === '' ? 'nothing' : code)
  }
  const handleLogOut = () => {
    LocalStorageUtils.removeItem('token')
    return (window.location = '/login')
  }
  const user = LocalStorageUtils.getUser()

  return (
    <div className="h-screen bg-home bg-cover">
      <div className="h-screen w-screen flex">
        <div className="m-auto w-[28rem] h-[20rem] bg-modal rounded-lg shadow-lg p-6">
          <div className="flex h-full">
            <div className="mx-auto py-12 w-full">
              <div className="mx-auto w-full text-center text-white item-center">
                <h2 className="text-xl text">
                  Enter code to start <span className="font-black">Battle.</span>
                </h2>
                <div className="border border-[#C4C4C4] border-b-0 w-1/4 mx-auto m-2 mb-11"></div>
                <input
                  type="text"
                  value={code}
                  onChange={(event) => handleInputChange(event.target.value)}
                  className="bg-[#ffffff] text-[#41374b] text-sm text-center font-semibold py-2 px-4 rounded-lg focus:outline-none"
                  placeholder="Code given by F-Code"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSubmit()
                    }
                  }}
                />

                <div
                  onClick={handleSubmit}
                  className="my-6 p-2 bg-[#1b171f] text-sm font-bold text-[#54585C] w-1/3 mx-auto rounded-lg cursor-pointer hover:text-[#f7f7f7] hover:bg-[#231e29] duration-300"
                >
                  Start
                </div>
                <div className="mx-auto w-full text-center text-white">
                  <h4 className="text-xs">
                    Not <span className="font-semibold">{user?.sub.name}</span>?
                    <div
                      className="font-bold ease-in-out duration-300 hover:opacity-80 cursor-pointer ml-1 inline-block"
                      onClick={handleLogOut}
                    >
                      Log out
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start
