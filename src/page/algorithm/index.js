import React, { useState } from 'react'

import LocalStorageUtils from '../../util/LocalStorageUtils'

const Algorithm = () => {
  const [code, setCode] = useState('')

  const handleInputChange = (value) => {
    setCode(value)
  }

  const handleSubmit = async () => {
    alert('Entered: ' + code === '' ? 'nothing' : code)
  }
  const handleLogOut = () => {
    LocalStorageUtils.deleteUser()
    return (window.location = '/login/algorithm')
  }
  const user = LocalStorageUtils.getUser()

  return (
    <div className="h-screen bg-gray-50">
      <div className="h-screen w-screen flex">
        <div className="m-auto w-[56rem] h-[32rem] bg-white rounded-lg shadow-lg p-6">
          <div className="flex h-full text-center">
            <div className="w-1/2 py-6">
              <h2 className="text-bold font-bold text-gray-700 text-xl">Get template</h2>
              <div className="mt-52 mx-auto py-2 w-1/2 font-semibold text-sm text-gray-600 bg-[#EFEEF1] duration-300 hover:shadow-md cursor-pointer rounded-3xl">
                Link to template
              </div>
            </div>
            <div className="border border-l-0"></div>
            <div className="w-1/2 py-6">
              <h2 className="text-bold font-bold text-gray-700 text-xl">Submit code</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Algorithm
