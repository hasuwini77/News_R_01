import styles from './Main.module.css'
import BigNews from '../BigNews'
import FeaturedNews from '../FeaturedNews'
import RecentNews from '../RecentNews'
import Category from '../Category'
import BreakingPart from '../BreakingPart'
import { worldCategory, sportCategory, crimeCategory, entertainmentCategory, swedenCategory } from '../../data/data';

const Main = ({ FPupdateFunction }) => {

    return (
        <>
            < BreakingPart BPupdateFunction={FPupdateFunction} />
            <div className={styles.mainContent}>
                < RecentNews RCupdateFunction={FPupdateFunction} />
                < BigNews BNupdateFunction={FPupdateFunction} />
                < FeaturedNews FNupdateFunction={FPupdateFunction} />
            </div>
            <div className={styles.categoryContent}>
                <Category name="World" articleArray={worldCategory} CupdateFunction={FPupdateFunction} />
                <Category name="Sweden" articleArray={swedenCategory} CupdateFunction={FPupdateFunction} />
                <Category name="Sport" articleArray={sportCategory} CupdateFunction={FPupdateFunction} />
                <Category name="Entertainment" articleArray={entertainmentCategory} CupdateFunction={FPupdateFunction} />
                <Category name="Crime" articleArray={crimeCategory} CupdateFunction={FPupdateFunction} />
            </div>
        </>
    )
}

export default Main