import React from 'react'
import './SaveDraftSendButton.css'

function SaveDraaftSendButton({ label, width, backgroundColor, color }) {
  return (
    <button className="save-draft-send-button" style={{ width, backgroundColor, color }}>
      {label}
    </button>
  )
}

export default SaveDraaftSendButton