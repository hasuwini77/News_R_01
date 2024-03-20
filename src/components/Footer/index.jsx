import styles from './Footer.module.css'

const Footer = () => {

    const myName = "Edwin Andermyr"
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <p>Created by {myName} </p>
            <p>Copyright   {currentYear} </p>
        </footer>
    )
}

export default Footer; 