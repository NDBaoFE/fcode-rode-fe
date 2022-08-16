import React, { useState, useEffect } from 'react'

import LocalStorageUtils from '../../util/LocalStorageUtils'
import adminApi from '../../util/adminApi'
import signOut from './signOut'

import { IoLogOutOutline } from 'react-icons/io5'

const RoundOne = () => {
  const code = {
    one: 'RODE2022_FCODE_CSSV1_607598',
    two: 'RODE2022_FCODE_CSSV1Ba_313211',
  }
  const [codeOne, setCodeOne] = useState([
    {
      lastSubmit: {
        score: 0,
        code: '',
        submitAt: '',
      },
      user: { name: '', email: '' },
    },
  ])

  const [codeTwo, setCodeTwo] = useState([
    {
      lastSubmit: {
        score: 0,
        code: '',
        submitAt: '',
      },
      user: { name: '', email: '' },
    },
  ])

  useEffect(() => {
    const getCodeOne = async () => {
      const token = LocalStorageUtils.getItem('token')
      const res1 = await adminApi.getRank('1', token)
      const res2 = await adminApi.getRank('1', token)
      setCodeOne(res1.data)
      setCodeTwo(res2.data)
    }
    getCodeOne()
  }, [])

  const Sidebar = () => {
    return (
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
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out"
              href="/admin/roundOne"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Round 1
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
              href="/admin/roundTwo"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Round 2
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
              href="/admin/roundThree"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Round 3
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
              href="/admin/roundFour"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Round 4
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
              href="/admin/manageProblem"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Manage problems
            </a>
          </li>
        </ul>
      </div>
    )
  }

  const DataTable = () => {
    return (
      <div className="py-2 inline-block min-w-full">
        {/* start code one */}

        <div className="pb-16">
          <div className="flex">
            <h3 className="mx-auto border-b-2 w-1/12 text-center py-3 font-semibold">
              EXAM CODE 1
            </h3>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Name
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Email
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Score
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Submit time
                  </th>
                </tr>
              </thead>
              <tbody>
                {codeOne &&
                  codeOne.map((player, idx) => {
                    return (
                      <tr className="border-b" key={player.id}>
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
                          {player.lastSubmit.submitAt}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* end code one */}

        {codeTwo && (
          <div className="pb-16">
            <div className="flex">
              <h3 className="mx-auto border-b-2 w-1/12 text-center py-3 font-semibold">
                EXAM CODE 2
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
                  {codeTwo &&
                    codeTwo.map((player, idx) => {
                      return (
                        <tr className="border-b" key={player.id}>
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
                            {player.lastSubmit.submitAt}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <div className="w-full">
        <Sidebar />
        <div className="pl-[240px] w-full">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <DataTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoundOne
