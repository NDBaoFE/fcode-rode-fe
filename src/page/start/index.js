import React, { useState } from 'react'

const Start = () => {
  const [code, setCode] = useState('')

  const handleInputChange = (value) => {
    setCode(value)
  }

  const handleSubmit = async () => {
    alert('Entered: ' + code === '' ? 'nothing' : code)
  }

  const StartBox = () => {
    return (
      <div className="m-auto w-[28rem] h-[20rem] bg-modal rounded-lg drop-shadow-md p-6">
        <div className="flex h-full">
          <div className="mx-auto py-6 w-full">
            <div className="mx-auto w-full text-center text-white item-center">
              <h2 className="text-xl text">
                Enter code to start <span className="font-black">Battle.</span>
              </h2>
              <div className="border border-[#C4C4C4] border-b-0 w-1/4 mx-auto my-7"></div>
              <input
                type="text"
                value={code}
                onChange={(event) => handleInputChange(event.target.value)}
                className="bg-[#ffffff] text-[#41374b] text-sm text-center font-semibold py-2 px-4 rounded-lg focus:outline-none"
                placeholder="Enter code to here"
                autoFocus
              />
              <div
                onClick={handleSubmit}
                className="my-6 p-2 bg-[#1b171f] text-sm text-[#54585C] w-1/3 mx-auto rounded-lg cursor-pointer hover:text-[#f7f7f7] hover:bg-[#231e29] duration-300"
              >
                Start
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-home bg-cover">
      <div className="h-screen w-screen flex">
        <StartBox />
      </div>
    </div>
  )
}

export default Start
