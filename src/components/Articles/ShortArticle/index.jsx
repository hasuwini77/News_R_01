import styles from './ShortArticle.module.css'

const ShortArticle = ({ headline, deck, category }) => {

    return (

        <div className={styles.shortArticle}>
            <h4> {headline} {deck} </h4>
            <p className={styles.category}>Category: {category}</p>
            <hr />
        </div>
    )
}

export default ShortArticle