import styles from './BreakingNews.module.css';

const BreakingNews = ({ headline }) => {

    return (
        <>
            <span className={styles.breaking}> {headline} → </span>
        </>
    )
}

export default BreakingNews