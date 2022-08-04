import React from 'react'

function OutPutHeader({ slideChecked, changeSlideCheckBoxValue,diffChecked,changeDiffCheckBoxValue } ) {

  
  return (
    <div className='item__header output'>
        <h3>editor</h3>
        <div>
       <input type='checkbox' id='slide-checkbox'  checked={slideChecked}  onChange={changeSlideCheckBoxValue}/>
       <label htmlFor="slide-checkbox">Slide 	&amp; Compare</label>
       <input type='checkbox' id='diff-checkbox'  checked={diffChecked}  onChange={changeDiffCheckBoxValue}/>
       <label htmlFor="diff-checkbox">Diff</label>
       </div>
    </div>
  )
}

export default OutPutHeader