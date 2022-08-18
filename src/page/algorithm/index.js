import React, { useState, useEffect } from 'react'

import LocalStorageUtils from '../../util/LocalStorageUtils'
import productApi from '../../util/productApi'

const Algorithm = () => {
  const token = LocalStorageUtils.getItem('token')
  const algoId = LocalStorageUtils.getItem('algoId')
  const templateLink = LocalStorageUtils.getItem('templateLink')
  const [file, setFile] = useState(null)
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    const algoId = LocalStorageUtils.getItem('algoId')
    if (algoId === null) {
      return (window.location = '/algorithm')
    }
  }, [])

  const handleSubmit = async () => {
    const body = new FormData()
    if (file === null) {
      alert('Please upload a file')
    } else {
      body.append('file', file)
      body.append('algoId', algoId)
      const res = await productApi.submitAlgorithm(token, body)
      if (res.status === 201) {
        setIsShow(true)
      }
    }
  }
  const handleConfirm = () => {
    setIsShow(false)
    LocalStorageUtils.clear()
    return (window.location = '/login/algorithm')
  }

  return (
    <div className="h-screen bg-gray-50">
      <div className="h-screen w-screen flex">
        <div className="m-auto w-[52rem] h-[18rem] bg-white rounded-lg shadow-lg p-6">
          <div className="flex h-full text-center">
            <div className="w-1/2 py-6 relative">
              <h2 className="text-bold font-bold text-gray-700 text-xl">Get template</h2>
              <div className="border border-b-0 w-1/3 mx-auto my-1"></div>
              <h2 className="text-bold font-semibold text-gray-700 text-sm mt-8">
                Exam code: <span className="font-bold">{algoId}</span>
              </h2>
              <a
                href={templateLink}
                target="_blank"
                rel="noreferrer"
                className="absolute mx-auto left-0 right-0 bottom-8 w-[12rem] py-2 font-semibold text-sm text-gray-600 bg-[#EFEEF1] duration-300 hover:shadow-md cursor-pointer rounded-lg"
              >
                Link to template
              </a>
            </div>
            <div className="border border-l-0"></div>
            <div className="w-1/2 py-6 relative">
              <h2 className="text-bold font-bold text-gray-700 text-xl">Submit code</h2>
              <div className="border border-b-0 w-1/3 mx-auto my-1"></div>
              <input
                type="file"
                className="w-[14rem] text-sm mx-auto mt-6"
                onChange={(event) => {
                  setFile(event.target.files[0])
                }}
              />
              <div
                onClick={handleSubmit}
                className="absolute mx-auto left-0 right-0 bottom-8 w-[12rem] py-2 font-semibold text-sm text-gray-600 bg-[#EFEEF1] duration-300 hover:shadow-md cursor-pointer rounded-lg"
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShow ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none w-[20rem]">
                {/*header*/}
                <div className="flex items-start justify-between p-5rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed text-center">
                    Submit success!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center p-6 rounded-b">
                  <button
                    className="mx-auto text-green-500 border rounded-3xl hover:bg-green-50 border-green-300 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleConfirm}
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default Algorithm
