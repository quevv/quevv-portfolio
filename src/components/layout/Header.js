import Link from 'next/link'
import React from 'react'
import Styles from '../../../styles/LayoutStyle.module.css'

const Header = () => {
  return (
    <div className={Styles.header}>
      <Link href="/">
        <a>Portfolio</a>
      </Link>
      <div>
      <ul style={{display: 'flex', flexWrap: 'nowrap', listStyleType: 'none' }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#">About</Link>
        </li>
        <li>
          <Link href="/#">About</Link>
        </li>
        <li>
          <Link href="/#">About</Link>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Header
