import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../../assets/img/avatar.png'
import bg from '../../../assets/img/bg.png'
import LocalStorageUtils from '../../../util/LocalStorageUtils'
import CountdownTimer from './CountdownTimer'

function NavBar({ children }) {
  const { id } = useParams()
  let name = ''
  let path = ''
  let colors = []
  const [value, setValue] = useState(name)

  const startTime = LocalStorageUtils.getItem('startTime')
  const battleTime = LocalStorageUtils.getItem('battleTime')
  let ExpiredTime = new Date(`${startTime}`).getTime() + battleTime * 1000

  return (
    <Container>
      <LeftNavBar>
        <Logo src={logo}></Logo>
        <Text>F - Code</Text>
      </LeftNavBar>
      <NavBarItem>
        <h4 className="header_title">TIMERS: </h4>
        <CountdownTimer targetDate={ExpiredTime} />
      </NavBarItem>
      <div>{children}</div>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  background: url(${bg});
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* justify-content: space-between; */
  left: 0;
  position: fixed;
  bottom: 0;
  top: 0;
  height: 100vh;
  flex-direction: column;
  width: 400px;
`

const LeftNavBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 12px 0;
`
const Logo = styled.img`
  width: 45px;
  height: 45px;
`
const NavBarItem = styled.div`
  width: var(--nav-bar-width);
  padding: 12px;
  box-sizing: border-box;
`
export const Text = styled.h2`
  color: #fff;
  margin-left: 12px;
  text-transform: uppercase;
  font-weight: 600;
`
