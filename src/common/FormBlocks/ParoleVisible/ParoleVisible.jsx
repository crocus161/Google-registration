import React from 'react';
import styles from './ParoleVisible.module.scss'

const ParoleVisible = ({register}) => {
    return (
        <div className={styles.password__checkbox}>
            <input {...register('passwordVisibility')} type='checkbox' id='checkbox' />
            <label htmlFor='checkbox'>Показать пароль</label>
        </div>
    )
}

export default ParoleVisible
