import React from 'react'
import { Link } from 'react-router-dom'

const LinkCS = function ({ linkTitle, ...rest }) {
  return (
    <Link className="link-control-custom" {...rest}>{linkTitle}</Link>
  )
}

export default LinkCS
