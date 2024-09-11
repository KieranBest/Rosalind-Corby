import { useState } from 'react'
import  styles from './Navbar.module.css';

export const Navbar = () => {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
    setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
    setIsActive(false)
    }
    return (
    <div>
        <header>
            <nav className={`${styles.navbar}`}>
                <a href='/' className={`${styles.logo}`}>Rosalind Corby</a>
                <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                    <li onClick={removeActive}>
                        <a href='/' className={`${styles.navLink}`}>Home</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/services' className={`${styles.navLink}`}>Services</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/contact' className={`${styles.navLink}`}>Contact</a>
                    </li>
                </ul>
                <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                    <span className={`${styles.bar}`}></span>
                </div>
            </nav>
        </header>
    </div>
    );
}
export default Navbar;
;