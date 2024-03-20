import styles from './SelectedCategory.module.css'
import MainArticle from "../Articles/MainArticle";


const SelectedCategory = ({ category }) => {

    return (
        <>
            <div>This is my {category.map((article, index) => < MainArticle key={index} {...article} />)}
            </div></>

    )
}

export default SelectedCategory;