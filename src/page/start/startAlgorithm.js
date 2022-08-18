import React, { useState } from 'react'

import LocalStorageUtils from '../../util/LocalStorageUtils'
import productApi from '../../util/productApi'

const StartAlgorithm = () => {
  const token = LocalStorageUtils.getItem('token')
  const [code, setCode] = useState('')

  const handleInputChange = (value) => {
    setCode(value)
  }

  const handleSubmit = async () => {
    const res = await productApi.getAlgo(token, code)
    LocalStorageUtils.setItem('algoId', res.data.algoId)
    LocalStorageUtils.setItem('templateLink', res.data.templateLink)
    return (window.location = '/algorithm/start')
  }
  const handleLogOut = () => {
    LocalStorageUtils.deleteUser()
    return (window.location = '/login/algorithm')
  }
  const user = LocalStorageUtils.getUser()

  return (
    <div className="h-screen bg-gray-50">
      <div className="h-screen w-screen flex">
        <div className="m-auto w-[28rem] h-[20rem] bg-white rounded-lg shadow-lg p-6">
          <div className="flex h-full">
            <div className="mx-auto py-4 w-full">
              <div className="mx-auto w-full text-center item-center">
                <h2 className="text-xl text">
                  Enter code to start <span className="font-black">Battle.</span>
                </h2>
                <h4 className="text-xs my-3">
                  <a
                    href="/css"
                    className="font-semibold ease-in-out duration-300 hover:opacity-80 cursor-pointer"
                  >
                    → Move to CSS branch.
                  </a>
                </h4>
                <div className="border border-[#b8b8b8] border-b-0  w-1/4 mx-auto m-2 mb-11"></div>
                <input
                  type="text"
                  value={code}
                  onChange={(event) => handleInputChange(event.target.value)}
                  className="bg-[#68707633] text-sm text-center font-semibold py-2 px-4 rounded-lg focus:outline-none"
                  placeholder="Code given by F-Code"
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSubmit()
                    }
                  }}
                />

                <div
                  onClick={handleSubmit}
                  className="my-6 p-2 bg-[#1b171f] text-white text-sm font-bold w-1/3 mx-auto rounded-lg cursor-pointer hover:text-gray-300 hover:bg-[#231e29] duration-300"
                >
                  Start
                </div>
                <div className="mx-auto w-full text-center">
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

export default StartAlgorithm
