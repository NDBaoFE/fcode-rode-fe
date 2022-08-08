import React from 'react'

function EditorHeader({ count }) {
  return (
    <div className="item__header editor">
      <h3>editor</h3>
      <h4>{count} characters</h4>
    </div>
  )
}

export default EditorHeader
