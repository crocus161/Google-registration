import React from 'react';
import styles from './Result.module.scss';
import { useData } from '../../../context/DataContext';
import PrevButton from '../../../common/FormBlocks/PrevButton/PrevButton';

const Result = () => {
    const { data } = useData();
    console.log(JSON.stringify(data, null, '\t'));
    return (
        <div className={styles.result}>
            <h2>Go to console</h2>
            <PrevButton />
        </div>
    )
}

export default Result
