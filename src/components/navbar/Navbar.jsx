import React from 'react'
import Link from "next/link"
import Links from './links/Links'
import styles from './navbar.module.css';

const Navbar = async () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        {/* <Links session={session}/> */}
        <Links />
      </div>
    </div>
  )
}

export default Navbar
