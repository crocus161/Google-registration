import React from 'react';
import styles from './ButtonGroup.module.scss';
import Button from '../../Button/Button';
import PrevButton from '../PrevButton/PrevButton';

const ButtonGroup = () => {
    return (
        <div className={styles.box}>
            <PrevButton />
            <Button type='submit' fill>Далее</Button>
        </div>
    )
}

export default ButtonGroup
