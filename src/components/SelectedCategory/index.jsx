import styles from './SelectedCategory.module.css'
import MainArticle from "../Articles/MainArticle";


const SelectedCategory = ({ category, SCupdateFunction }) => {

    return (
        <>
            <div>This is my {category.map((article, index) => < MainArticle key={index} {...article} MAupdateFunction={SCupdateFunction} />)}
            </div></>

    )
}

export default SelectedCategory;