import React, { useRef, useEffect, useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'

import EditorHeader from './components/EditorHeader'
// import Footer from './components/Footer'
import NavBar from './components/NavBar'
import OutPutHeader from './components/OutPutHeader'
import TargetHeader from './components/TargetHeader'

// import bg from '../../assets/img/bg.png'
import LocalStorageUtils from '../../util/LocalStorageUtils'
import productApi from '../../util/productApi'
import './index.css'
import { lastScore, highScore } from './store/CodeMaterial'
import { getExpiredTime } from './store/dtb'

import { htmlLanguage } from '@codemirror/lang-html'
import { dracula } from '@uiw/codemirror-theme-dracula'
import CodeMirror from '@uiw/react-codemirror'
import 'react-toastify/dist/ReactToastify.css'

function Arena() {
  const [code, setCode] = useState(window.localStorage.getItem('code') || '')
  const [count, setCount] = useState(0)
  const [slideChecked, setSlideChecked] = useState(false)
  const [diffChecked, setDiffChecked] = useState(false)
  const [imgPath, setImgPath] = useState('')

  const imgLink = LocalStorageUtils.getItem('image')

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
    console.log(imgPath)
  }
  //render everytime the codechange
  useEffect(() => {
    window.localStorage.setItem('code', code)
  }, [code])
  useEffect(() => {
    getImg()
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
  const handleSubmit = () => {
    const realtime = new Date().getTime()
    alert(`${getExpiredTime - realtime}`)
  }

  return (
    <Wrapper>
      <NavBar>
        <Target>
          <TargetContent>
            <div className="inner-header">
              <h4 className="header_title header__title--inner">Colors to use</h4>
              <div className="colors-list ">{listOfColor}</div>
            </div>
          </TargetContent>
        </Target>
        <div className="inner-header">
          <h4 className="header_title header__title--inner">Your Score</h4>
          <div className="score-container">
            <div>
              <p className="score-container__score-type">Last Score:</p>
              <p className="score-container__score">{lastScore}</p>
            </div>
            <div>
              <p className="score-container__score-high-type">High Score:</p>
              <p className="score-container__score">{highScore}</p>
            </div>
          </div>
        </div>
      </NavBar>
      <Container>
        <Editor>
          <EditorHeader count={count} />
          <CodeMirror
            className="editor "
            value={code}
            height="calc(100vh - 88px);"
            theme={dracula}
            extensions={[htmlLanguage]}
            options={{ lineWrapping: 'true', lineNumbers: 'true' }}
            onChange={(e) => {
              setCode(e)

              setCount(e.length)
            }}
          />
          <div className="btn-group">
            <div className="submit-btn" onClick={handleSubmit}>
              Submit
            </div>
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
                <img
                  src={`data:image/png;base64,${imgPath}`}
                  width="400px"
                  height="300px"
                  alt="level1"
                />
              </div>
            </div>
            <Target>
              <TargetHeader></TargetHeader>
              <TargetContent>
                <img src={`data:image/png;base64,${imgPath}`} className="target_img" />
              </TargetContent>
            </Target>
          </OutPutContent>
        </OutPut>
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
      {/* <Footer /> */}
    </Wrapper>
  )
}

export default Arena

const Wrapper = styled.div`
  background-color: #171d23;
  min-width: 100vw;
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-left: 420px;
`
const Editor = styled.div`
  min-width: 27.5rem;
  max-width: 100%;
  height: 100vh;
`
const Target = styled.div`
  max-width: 100vw;

  img {
    width: 400px;
    height: 300px;
  }
`
const OutPut = styled.div`
  min-width: 400px;
  max-width: 100%;
  margin-left: 50px;
  height: 100vh;
`

const OutPutContent = styled.div`
  /* background: #171d23; */
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TargetContent = styled(OutPutContent)`
  height: 130%;
`
