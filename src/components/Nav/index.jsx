import styles from './Nav.module.css'
import NavItem from './NavItem';

const Navigation = ({ updateSelectedCategory, NupdateFunction }) => {

    return (
        <nav className={styles.navContainer}>
            <div className={styles.navContent}>
                <NavItem category="Home" updateFunction={updateSelectedCategory} NIupdateFunction={NupdateFunction} />
                <NavItem category="World" updateFunction={updateSelectedCategory} NIupdateFunction={NupdateFunction} />
                <NavItem category="Sweden" updateFunction={updateSelectedCategory} NIupdateFunction={NupdateFunction} />
                <NavItem category="Sport" updateFunction={updateSelectedCategory} NIupdateFunction={NupdateFunction} />
                <NavItem category="Crime" updateFunction={updateSelectedCategory} NIupdateFunction={NupdateFunction} />
                <NavItem category="Entertainment" updateFunction={updateSelectedCategory} NIupdateFunction={NupdateFunction} />
            </div>
        </nav>
    )
}

export default Navigation; 