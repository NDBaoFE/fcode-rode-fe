import React, { useState, useEffect } from 'react'

import { toast, ToastContainer } from 'react-toastify'

import LocalStorageUtils from '../../util/LocalStorageUtils'
import productApi from '../../util/productApi'

import 'react-toastify/dist/ReactToastify.css'

const Start = (props) => {
  const [code, setCode] = useState('')

  const handleInputChange = (value) => {
    setCode(value)
  }
  let tokenImage = LocalStorageUtils.getItem('image')

  useEffect(() => {
    if (tokenImage !== null) {
      window.location = '/arena'
    }
  }, [tokenImage])
  const handleSubmit = async () => {
    const token = LocalStorageUtils.getItem('token')
    let res
    try {
      res = await productApi.startBattle(code, token)
    } catch (error) {
      toast.error('Wrong code!!, Please try again')
    } finally {
      LocalStorageUtils.setItem('startTime', res.data.startTime)
      LocalStorageUtils.removeItem('code')
      LocalStorageUtils.setItem('battleTime', res.data.problem.battleTime)
      LocalStorageUtils.setItem('image', res.data.problem.image)
      LocalStorageUtils.setItem('colors', res.data.problem.colors)
      LocalStorageUtils.setItem('problemId', res.data.problem.problemId)
    }

    return (window.location = '/arena')
  }
  const handleLogOut = () => {
    LocalStorageUtils.deleteUser()
    return (window.location = '/login')
  }
  const user = LocalStorageUtils.getUser()

  return (
    <div className="h-screen bg-home bg-cover">
      <div className="h-screen w-screen flex">
        <div className="m-auto w-[28rem] h-[20rem] bg-modal rounded-lg shadow-lg p-6">
          <div className="flex h-full">
            <div className="mx-auto py-4 w-full">
              <div className="mx-auto w-full text-center text-white item-center">
                <h2 className="text-xl text">
                  Enter code to start <span className="font-black">Battle.</span>
                </h2>
                <h4 className="text-xs my-3">
                  <a
                    href="/algorithm"
                    className="font-semibold ease-in-out duration-300 hover:opacity-80 cursor-pointer"
                  >
                    → Move to Algorithm branch.
                  </a>
                </h4>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Start
