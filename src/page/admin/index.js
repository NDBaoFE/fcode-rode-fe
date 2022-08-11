import React from 'react'

// import { Route } from 'react-router-dom'
import { IoLogOutOutline } from 'react-icons/io5'

const Admin = () => {
  const Sidebar = () => {
    return (
      <div className="w-60 h-full shadow-md bg-white px-1 absolute">
        <div className="text-sm px-4 my-5 mx-2 flex items-center bg-gray-200 hover:bg-gray-300 duration-300 p-3 rounded-lg cursor-pointer">
          Log out
          <div onClick={logOutHandle} className="ml-auto ">
            <IoLogOutOutline />
          </div>
        </div>
        <ul className="relative pt-5">
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 bg-gray-100 hover:bg-gray-300 transition duration-300 ease-in-out"
              href="/admin"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Score board
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
              href="/admin/add"
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

  const logOutHandle = () => {
    alert('log out')
  }

  const DataTable = () => {
    return (
      <div className="pl-[240px] w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="py-2 inline-block min-w-full">
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
                        First
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Last
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Mark
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Otto
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Jacob
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Thornton
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @fat
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        3
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Larry
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Wild
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @twitter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <div className="w-full">
        <Sidebar />
        <DataTable />
      </div>
    </div>
  )
}

export default Admin
