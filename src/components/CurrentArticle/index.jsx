import React from 'react';
import styles from './CurrentArticle.module.css';

const CurrentArticle = ({ article }) => {
    return (
        <div className={styles.article}>
            {article.headline}
        </div>
    );
}

export default CurrentArticle;