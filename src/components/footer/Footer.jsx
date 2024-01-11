import React from 'react'
import {BsGit, BsGithub} from "react-icons/bs"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.cotacts}>
                <a href="https://github.com">
                    {" "}
                    <BsGithub />
                </a>
            </div>

        </div>
    </footer>
  )
}

export default Footer