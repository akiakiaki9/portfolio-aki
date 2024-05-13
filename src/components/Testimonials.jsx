import React from 'react'

export default function Testimonials() {
  return (
    <div className="test">
      <div className="test-blok">
        <div className="test-blok__section">
          <p>For now you can leave your feedback in Telegram and it will be shown here</p>
          <button><a href="https://t.me/dev_aki">Go to Telegram..</a></button>
        </div>
      </div>
      <div className="test-footer">
        <p>no reviews yet</p>
        <hr style={{color: 'var(--main-color'}} />
      </div>
    </div>
  )
}
