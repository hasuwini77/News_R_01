import styles from './Main.module.css'
import BigNews from '../BigNews'
import FeaturedNews from '../FeaturedNews'
import RecentNews from '../RecentNews'
import Category from '../Category'
import BreakingPart from '../BreakingPart'
import { worldCategory, sportCategory, crimeCategory, entertainmentCategory, swedenCategory } from '../../data/data';

const Main = () => {

    return (
        <>
            < BreakingPart />
            <div className={styles.mainContent}>
                < RecentNews />
                < BigNews />
                < FeaturedNews />
            </div>
            <div className={styles.categoryContent}>
                <Category name="World" articleArray={worldCategory} />
                <Category name="Sweden" articleArray={swedenCategory} />
                <Category name="Sport" articleArray={sportCategory} />
                <Category name="Entertainment" articleArray={entertainmentCategory} />
                <Category name="Crime" articleArray={crimeCategory} />
            </div>
        </>
    )
}

export default Main