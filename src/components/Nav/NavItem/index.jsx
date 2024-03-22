import styles from './NavItem.module.css'

const NavItem = ({ category, updateFunction, NIupdateFunction }) => {
    const handleClick = () => {
        { category === "Home" ? updateFunction(null) : updateFunction(category.toLowerCase()) }
        NIupdateFunction(null)
    }
    return <a className={styles.navItem} onClick={handleClick}>{category}</a>
}

export default NavItem;