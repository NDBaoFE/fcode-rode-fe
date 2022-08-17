import React, { useRef, useEffect, useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'

import EditorHeader from './components/EditorHeader'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import OutPutHeader from './components/OutPutHeader'
import TargetHeader from './components/TargetHeader'

import LocalStorageUtils from '../../util/LocalStorageUtils'
import productApi from '../../util/productApi'
import './index.css'
import { getExpiredTime } from './store/dtb'

import { htmlLanguage } from '@codemirror/lang-html'
import { dracula } from '@uiw/codemirror-theme-dracula'
import CodeMirror from '@uiw/react-codemirror'
import 'react-toastify/dist/ReactToastify.css'

function Arena() {
  const [code, setCode] = useState(window.localStorage.getItem('code') || '')
  const [battleTime, setBattleTime] = useState(0)
  const [openTime, setOpenTime] = useState(0)
  const [count, setCount] = useState(0)
  const [slideChecked, setSlideChecked] = useState(false)
  const [diffChecked, setDiffChecked] = useState(false)
  const [score, setScore] = useState('You havent submit anything')
  const [imgPath, setImgPath] = useState('')
  const imgLink = LocalStorageUtils.getItem('image')
  const problemId = LocalStorageUtils.getItem('problemId')
  const disbaledButton = parseBoolean(LocalStorageUtils.getItem('plsdontdeletethis'))
  const colors = LocalStorageUtils.getItem('colors')

  const changeSlideCheckBoxValue = () => {
    setSlideChecked((state) => !state)
  }
  const changeDiffCheckBoxValue = () => {
    setDiffChecked((state) => !state)
  }

  //ref
  const userOutPutRef = useRef()
  const imgRef = useRef()
  const outputContainerRef = useRef()
  const iframeRef = useRef()
  const getImg = async () => {
    const token = LocalStorageUtils.getItem('token')
    const path = await productApi.getImage(imgLink, token)
    setImgPath(path.data)
  }
  const getProblem = async () => {
    const token = LocalStorageUtils.getItem('token')
    const path = await productApi.getProblem(problemId, token)
    setBattleTime(path.data.battleTime)
    console.log(path.data)
    const openTime = new Date(`${path.data.openTime}`).getTime()
    LocalStorageUtils.setItem('darkmode', openTime)
    LocalStorageUtils.setItem('darkhorse', battleTime)
  }
  //render everytime the codechange
  useEffect(() => {
    window.localStorage.setItem('code', code)
  }, [code])
  useEffect(() => {
    getImg()
    getProblem()
  })

  //get colorlist from dtb
  const listOfColor = colors.map((color) => (
    <CopyToClipboard key={color} text={color} onCopy={() => toast.success('Copying💪')}>
      <button className="color" key={color} value={color}>
        <div className="color-demo" style={{ background: color }}></div>
        <h5 className="color-name">{color}</h5>
      </button>
    </CopyToClipboard>
  ))

  //compare output to img
  function imageCompareSlider(e) {
    if (slideChecked) {
      userOutPutRef.current.style.cursor = 'col-resize'
      iframeRef.current.style['z-index'] = '16'
      iframeRef.current.style['border-right'] = '2px solid red'
      iframeRef.current.style['border-left'] = 'none'
      iframeRef.current.style.width = e.clientX - outputContainerRef.current.offsetLeft + 'px'
    }
  }

  function resetWidth() {
    if (slideChecked) {
      userOutPutRef.current.style.cursor = 'unset'
      iframeRef.current.style['border-right'] = 'none'
      iframeRef.current.style['z-index'] = '10'
      imgRef.current.style['z-index'] = '9'
      iframeRef.current.style.width = '400px'
    }
  }
  const handleSubmit = async () => {
    const realtime = new Date().getTime()
    alert(`${getExpiredTime - realtime}`)
    const token = LocalStorageUtils.getItem('token')
    const score = await productApi.submit(problemId, code, token)
    setScore(score.data.score)
  }

  return (
    <>
      <NavBar />
      <Container>
        <Editor>
          <EditorHeader count={count} />
          <CodeMirror
            className="editor "
            value={code}
            height="calc(100vh - 173px);"
            theme={dracula}
            extensions={[htmlLanguage]}
            options={{ lineWrapping: 'true', lineNumbers: 'true' }}
            onChange={(e) => {
              setCode(e)
              setCount(e.length)
            }}
          />
          <div className="btn-group">
            <button className="submit-btn" onClick={handleSubmit} disabled={disbaledButton}>
              Submit
            </button>
          </div>
        </Editor>
        <OutPut>
          <OutPutHeader
            slideChecked={slideChecked}
            changeSlideCheckBoxValue={changeSlideCheckBoxValue}
            diffChecked={diffChecked}
            changeDiffCheckBoxValue={changeDiffCheckBoxValue}
          ></OutPutHeader>
          <OutPutContent>
            <div id="output-container" className="output-container" ref={outputContainerRef}>
              <iframe
                id="source"
                className="iframe-output"
                width="400px"
                height="300px"
                title="output"
                style={{ mixBlendMode: diffChecked ? 'difference' : 'normal' }}
                scrolling="no"
                ref={iframeRef}
                srcDoc={code}
              ></iframe>
              <div
                ref={userOutPutRef}
                className="output-layer"
                onMouseMove={imageCompareSlider}
                onMouseLeave={resetWidth}
              ></div>
              <div id="img-layer" className="img-layer" ref={imgRef}>
                <img src={`${imgPath}`} width="400px" height="300px" alt="level1" />
              </div>
            </div>
            <div className="inner-header">
              <h4 className="header_title header__title--inner">Your Score</h4>
              <div className="score-container">
                <div>
                  <p className="score-container__score-type">Last Score:</p>
                  <p className="score-container__score">{score.toFixed(3)}</p>
                </div>
              </div>
            </div>
          </OutPutContent>
        </OutPut>
        <Target>
          <TargetHeader></TargetHeader>
          <TargetContent>
            <img src={`${imgPath}`} className="target_img" />
            <div className="inner-header">
              <h4 className="header_title header__title--inner">Colors to use</h4>
              <div className="colors-list ">{listOfColor}</div>
              <h4 className="header_title header__title--inner">About us</h4>
            </div>
            <img
              className="sponsor"
              src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.15752-9/291646809_467849768137138_5749637646581215505_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=0joPAy5ovygAX_RYYjR&_nc_ht=scontent.fsgn19-1.fna&oh=03_AVIuA1BQGOk3P4_00NAA6CmNA_P2werHKH5FuYZUDqlBpA&oe=630FDC80"
            ></img>
          </TargetContent>
        </Target>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Container>
      <Footer />
    </>
  )
}

export default Arena
const Container = styled.div`
  display: flex;
`
const Editor = styled.div`
  min-width: 27.5rem;
  max-width: 100%;
  min-height: calc(100vh - 8rem);
`
const Target = styled.div`
  width: 440px;
  min-width: 440px;
  max-width: 100vw;
  height: calc(100vh - 85px);
  overflow-y: scroll;

  img {
    width: 400px;
    height: 300px;
  }
`
const OutPut = styled.div`
  min-width: 440px;
  max-width: 100%;
  height: calc(100vh - 85px);
`

const OutPutContent = styled.div`
  background: #171d23;
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TargetContent = styled(OutPutContent)`
  height: 130%;
`
