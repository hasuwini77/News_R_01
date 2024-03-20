import styles from './Nav.module.css'
import NavItem from './NavItem';

const Navigation = ({ updateSelectedCategory }) => {

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <NavItem category="Home" updateFunction={updateSelectedCategory} />
                <NavItem category="World" updateFunction={updateSelectedCategory} />
                <NavItem category="Sweden" updateFunction={updateSelectedCategory} />
                <NavItem category="Sport" updateFunction={updateSelectedCategory} />
                <NavItem category="Crime" updateFunction={updateSelectedCategory} />
                <NavItem category="Entertainment" updateFunction={updateSelectedCategory} />
            </div>
        </nav>
    )
}

export default Navigation; 