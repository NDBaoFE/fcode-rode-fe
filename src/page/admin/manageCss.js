import React, { useEffect, useState } from 'react'

import LocalStorageUtils from '../../util/LocalStorageUtils'
import adminApi from '../../util/adminApi'
import signOut from './signOut'

import { IoLogOutOutline } from 'react-icons/io5'

const ManageCss = () => {
  const token = LocalStorageUtils.getItem('token')
  const [code, setCode] = useState('')
  const [codeOne, setCodeOne] = useState(null)
  const [form, setForm] = useState({
    name: '',
    image: '',
    openTime: '',
    closeTime: '',
    battleTime: '',
    problemId: '',
  })
  const [colors, setColors] = useState('')
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setInterval(async () => {
      const token = LocalStorageUtils.getItem('token')
      const res = await adminApi.getRank('RODE2022_FCODE_CSSV1_837162', token)
      setCodeOne(res.data)
    }, 3000)
  }, [])

  const handleSubmitCode = async () => {
    const res = await adminApi.getRank(code, token)
    setCodeOne(res.data)
  }

  const handleSubmit = async () => {
    let array = colors.split(', ')
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('image', form.image)
    formData.append('openTime', form.openTime)
    formData.append('closeTime', form.closeTime)
    formData.append('battleTime', form.battleTime)
    formData.append('problemId', form.problemId)
    array.map((e) => {
      formData.append('colors', e)
    })
    const res = await adminApi.createProblem(token, formData)
    if (res.status === 201) {
      setIsShow(false)
      alert('Success')
    }
  }

  const DataTable = () => {
    return (
      codeOne && (
        <div className="py-2 inline-block min-w-full">
          {/* start code one */}
          <div className="pb-16">
            <div className="flex">
              <h3 className="mx-auto border-b-2 text-center py-3 font-semibold">
                EXAM CODE: <span className="font-black">{code}</span>
              </h3>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Score
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Submit time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {codeOne.map((player, idx) => {
                    return (
                      <tr className="border-b" key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {idx + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {player.user.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {player.user.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {player.lastSubmit.score}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {new Date(player.lastSubmit.submitAt).toLocaleString()}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* end code one */}
        </div>
      )
    )
  }
  const Upload = () => {
    return (
      <div className="flex">
        <p className="text-sm text-gray-500 ml-3 w-1/2 my-auto">Choose image file (400x300): </p>
        <input
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={(event) => {
            setForm({ ...form, image: event.target.files[0] })
          }}
        />
      </div>
    )
  }
  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <div className="w-full">
        <div className="w-60 h-full shadow-md bg-white px-1 absolute">
          <div
            onClick={signOut}
            className="text-sm px-4 my-5 mx-2 flex items-center bg-gray-200 hover:bg-gray-300 duration-300 p-3 rounded-lg cursor-pointer"
          >
            Log out
            <div className="ml-auto ">
              <IoLogOutOutline />
            </div>
          </div>
          <ul className="relative pt-5">
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
                href="/admin/manageProblem"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Manage CSS problems
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
                href="/admin/manageCss"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Manage CSS rank
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
                href="/admin/manageAlgo"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                Manage Algorithm rank
              </a>
            </li>

            <li>
              <div className="mx-auto my-4 flex flex-col">
                <input
                  type="text"
                  className="bg-[#68707633] mx-auto text-sm w-full font-semibold py-2 px-4 rounded-lg focus:outline-none mr-3"
                  placeholder="Exam code"
                  value={code}
                  onChange={(event) => {
                    setCode(event.target.value)
                  }}
                />
                <button
                  onClick={handleSubmitCode}
                  className="my-6 p-2 bg-[#1b171f] text-white text-sm font-bold mx-auto rounded-lg cursor-pointer hover:text-gray-300 hover:bg-[#231e29] duration-300"
                >
                  Get rank
                </button>
              </div>
            </li>
            <li>
              <div className="w-full flex mt-10">
                <div className="mx-auto">
                  <button
                    className="bg-[#A9DDE5] text-[#54585C] font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsShow(true)}
                  >
                    Add new problem
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="pl-[240px] w-full">
          <div className="flex flex-col max-h-[100vh]">
            <div className="overflow-x-auto">
              <DataTable />
            </div>
          </div>
        </div>
        {isShow ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg px-5 pt-10 pb-5 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between px-5 pb-5 rounded-t">
                    <h3 className="text-2xl font-extrabold">Add new problem</h3>
                  </div>
                  {/*body*/}
                  <div className="relative px-5 flex-auto">
                    <div className="mb-3 pt-0">
                      <label className="text-sm text-gray-500 ml-3">Name:</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(event) => {
                          setForm({ ...form, name: event.target.value })
                        }}
                        placeholder="Name"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <label className="text-sm text-gray-500 ml-3">Problem ID:</label>
                      <input
                        type="text"
                        onChange={(event) => {
                          setForm({ ...form, problemId: event.target.value })
                        }}
                        placeholder="Problem ID"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <label className="text-sm text-gray-500 ml-3">Battle time:</label>
                      <input
                        type="number"
                        pattern="\d*"
                        onChange={(event) => {
                          setForm({ ...form, battleTime: event.target.value })
                        }}
                        placeholder="Battle Time"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <label className="text-sm text-gray-500 ml-3">Colors codes:</label>
                      <input
                        type="text"
                        onChange={(event) => {
                          setColors(event.target.value)
                        }}
                        placeholder="Colors' codes"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <label className="text-sm text-gray-500 ml-3">Open time:</label>
                      <input
                        type="datetime-local"
                        onChange={(event) => {
                          setForm({ ...form, openTime: new Date(event.target.value) })
                        }}
                        placeholder="Placeholder"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      />
                    </div>
                    <div className="mb-3 pt-0">
                      <label className="text-sm text-gray-500 ml-3">Close time:</label>
                      <input
                        type="datetime-local"
                        onChange={(event) => {
                          setForm({ ...form, closeTime: new Date(event.target.value) })
                        }}
                        placeholder="Placeholder"
                        className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      />
                    </div>
                    <Upload />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 rounded-b">
                    <button
                      className="text-red-500 opacity-75 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setIsShow(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default ManageCss
