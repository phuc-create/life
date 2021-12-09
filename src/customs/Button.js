import React from 'react'

const Button = function ({ content, ...rest }) {
  return (
    <button className="button-control" {...rest} type="button">
      {content}
    </button>
  )
}

export default Button
