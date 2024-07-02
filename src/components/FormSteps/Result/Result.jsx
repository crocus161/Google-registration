import React from 'react';
import styles from './Result.module.scss';
import { useData } from '../../../context/DataContext';
import PrevButton from '../../../common/FormBlocks/PrevButton/PrevButton';

const Result = () => {
    const { data } = useData();

    return (
        <div className={styles.result}>
            <p>{JSON.stringify(data, null, '\t')}</p>
            <PrevButton />
        </div>
    )
}

export default Result
