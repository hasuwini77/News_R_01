import styles from './NavItem.module.css'

const NavItem = ({ category, updateFunction }) => {
    const handleClick = () => {
        { category === "Home" ? updateFunction(null) : updateFunction(category.toLowerCase()) }
    }
    return <a className={styles.navItem} onClick={handleClick}>{category}</a>
}

export default NavItem;