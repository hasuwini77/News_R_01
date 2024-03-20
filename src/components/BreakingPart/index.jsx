import styles from './BreakingPart.module.css'
import BreakingNews from '../BreakingNews'
import { articleLeft } from '../../data/data.js'

const BreakingPart = () => {

    return (
        <>
            <div className={styles.breaking}>
                <span className={styles.title}>Breaking News</span>
                {articleLeft.map((article, index) => (
                    < BreakingNews key={index} {...article} />
                ))}
            </div>
        </>
    )
}

export default BreakingPart