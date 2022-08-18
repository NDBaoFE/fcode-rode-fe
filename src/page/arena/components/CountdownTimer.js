import React, { useState } from 'react'

import LocalStorageUtils from '../../../util/LocalStorageUtils'
import { useCountdown } from './CountDown'
import DateTimeDisplay from './DateTimeDisplay'

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
    </div>
  )
}

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={minutes <= 5} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
      <div className="alert">
        This is a CountDown Clock, remember to submit your code ontime. I wish you a great adventure
        with F-code Rode 2022!!
      </div>
    </div>
  )
}

const CountdownTimer = ({ targetDate }) => {
  const [expired, setExpired] = useState(false)
  LocalStorageUtils.setItem('plsdontdeletethis', expired)
  const [minutes, seconds] = useCountdown(targetDate)

  if (minutes + seconds <= 0) {
    if (expired == false) {
      setExpired(true)
    }
    LocalStorageUtils.clear()
    window.location = '/'
    return <ExpiredNotice />
  } else {
    return <ShowCounter minutes={minutes} seconds={seconds} />
  }
}

export default CountdownTimer
