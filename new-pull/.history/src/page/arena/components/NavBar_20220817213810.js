import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../../assets/img/avatar.png'
import bg from '../../../assets/img/bg.png'
import { problems, getExpiredTime } from '../store/dtb'
import CountdownTimer from './CountdownTimer'

function NavBar({ children }) {
  const { id } = useParams()
  let name = ''
  let path = ''
  let colors = []
  const [value, setValue] = useState(name)

  const ExpiredTime = getExpiredTime

  for (let problem of problems) {
    if (problem.id == id) {
      name = problem.name
      path = problem.path
      colors = problem.colors
    }
  }

  const handleClick = (e) => {
    setValue(e.target.innerText)
  }

  //render list of problems from dtb
  const list = problems.map(({ name, id }) => (
    <Link onClick={handleClick} key={id} to={`/arena/${id}`}>
      {' '}
      <li className="problem">{name}</li>
    </Link>
  ))

  return (
    <Container>
      <LeftNavBar>
        <Logo src={logo}></Logo>
        <Text>F-Code</Text>
      </LeftNavBar>
      <>
        <h2 className="level">
          <a href="#">Battle #19</a>
        </h2>
        <details className="problem-dropbox">
          <summary>{value}</summary>
          <ul className="other-problems">{list}</ul>
        </details>
      </>
      <RightNavBar>
        <h4 className="header_title header__title--inner">TIMERS: </h4>
        <CountdownTimer targetDate={ExpiredTime} />
      </RightNavBar>
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
`
const Logo = styled.img`
  width: 45px;
  height: 45px;
`
const RightNavBar = styled.div`
  width: var(--nav-bar-width);
  padding: 0 12px;
  box-sizing: border-box;
`
export const Text = styled.h2`
  color: #fff;
  margin-left: 12px;
`
