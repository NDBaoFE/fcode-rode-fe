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
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-300 transition duration-300 ease-in-out"
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
              href="/admin/final"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Final rounds
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

  const logOutHandle = () => {
    alert('log out')
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-50">
      <div className="w-full">
        <Sidebar />
      </div>
    </div>
  )
}

export default Admin
