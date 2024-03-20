import styles from './Header.module.css'

const Header = () => {

    return (
        <header className={styles.header}>
            <ul className={styles.socialIcons}>
                <li><a href="#" className="social-icon"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#" className="social-icon"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="social-icon"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a></li>
            </ul>


            <h1>News for Today</h1>

            <ul className={styles.phoneNumber}>
                <li><a href="tel:1234567890" className="social-icon"><i className="fas fa-phone"></i></a></li>
                <li><a href="tel:1234567890">1234567890</a></li>
            </ul>

        </header>
    )
}

export default Header; 