import React from "react";
import styles from './nav.module.css';



const Nav = () => {
    return (
        <div className={styles.containerNav}>
            <nav className={styles.navbar}>
                <a className={styles.logo}> Math Magicians </a>
                <ul className={styles.boxlist}>
                    <li>Home</li>
                    <li>Calculator</li>
                    <li>Quotes</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;