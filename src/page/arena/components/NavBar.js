import React, { useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { problems, getExpiredTime } from '../store/dtb'
import CountdownTimer from './CountdownTimer'

function NavBar() {
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
        <img src="https://cssbattle.dev/images/logo.svg"></img>
        <h2 className="level">
          <a href="#">Battle #19</a>
        </h2>
        <details className="problem-dropbox">
          <summary>{value}</summary>
          <ul className="other-problems">{list}</ul>
        </details>
      </LeftNavBar>
      <RightNavBar>
        <CountdownTimer targetDate={ExpiredTime} />
      </RightNavBar>
    </Container>
  )
}

export default NavBar

const Container = styled.div`
  min-width: 1280px;
  background: linear-gradient(to right, #721186, #9e00c5, #e345a0, #f6b804);
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`

const LeftNavBar = styled.div`
  display: flex;
  align-items: center;
`

const RightNavBar = styled.div``
