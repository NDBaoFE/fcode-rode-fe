import React, { useEffect } from 'react'

import { gapi } from 'gapi-script'
import { GoogleLogin } from 'react-google-login'

import Avatar from '../../assets/img/avatarblackasd.svg'
import LocalStorageUtils from '../../util/LocalStorageUtils'
import productApi from '../../util/productApi'

const AlgorithmLogin = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '977769293513-67s7vl5ij0nrvpafqliamobp1hhocrja.apps.googleusercontent.com',
        scope: 'email',
      })
    }

    gapi.load('client:auth2', start)
  }, [])
  const onSuccess = async (response) => {
    const token = response.tokenId
    const res = await productApi.login(token)
    LocalStorageUtils.setItem('token', res.data.tokens.access.token)
    return (window.location = '/algorithm')
  }
  const onFailure = (response) => {}

  const LoginBox = () => {
    return (
      <div className="m-auto w-[28rem] h-[40rem] shadow-2xl bg-white rounded-lg ">
        <div className="flex h-full">
          <div className="mx-auto relative py-6 w-full">
            <div className="absolute top-[7rem] mx-auto w-full text-center item-center">
              <img src={Avatar} alt="Avatar" className="w-1/4 mx-auto rounded-lg p-1" />
              <h2 className="text-xl pt-6 pb-2 text">
                Welcome to <span className="font-black">R.ODE Battle.</span>
              </h2>
              <h3 className="text-xs font-semibold">R.ODE Battle Algorithm branch.</h3>
              <div className="border border-[#C4C4C4] border-b-0 w-1/4 mx-auto my-6"></div>
              <GoogleLogin
                clientId="977769293513-67s7vl5ij0nrvpafqliamobp1hhocrja.apps.googleusercontent.com"
                onSuccess={onSuccess}
                onFailure={onFailure}
                render={(props) => (
                  <div
                    onClick={props.onClick}
                    className="p-2 bg-[#68707610] text-sm border border-0-[#11181C] w-2/3 mx-auto rounded-lg cursor-pointer hover:bg-[#6870762d] duration-300"
                  >
                    Sign in with Google account ⇀
                  </div>
                )}
              />
            </div>
            <div className="absolute bottom-6 mx-auto w-full text-center">
              <h4 className="text-xs">
                Wrong branch?{' '}
                <a
                  href="/login/css"
                  className="font-semibold ease-in-out duration-300 hover:opacity-80 cursor-pointer"
                >
                  Move to CSS branch.
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="h-screen bg-gray-50">
      <div className="h-screen w-screen flex">
        <LoginBox />
      </div>
    </div>
  )
}

export default AlgorithmLogin
