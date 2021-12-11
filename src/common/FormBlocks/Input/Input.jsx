import React from 'react';
import styles from './Input.module.scss';
import { ReactComponent as WarningIcon } from '../../../assets/warning.svg';

const Input = ({ label, register, name, errors, info, associative, ...props }) => {
    const error = associative ? errors : errors?.[name];
    return (
        <div className={`${styles.box} ${!!error && styles.box__error}`}>

            <input
                id={name}
                {...props}
                placeholder=' '
                autoComplete='off'
                {...register(name)}
                className={styles.input}
            />

            <label
                htmlFor={name}
                className={styles.label}
            >
                {label}
            </label>

            <div className={styles.border}></div>

            {!!error && (
                <p className={`${styles.error} ${styles.note}`}>
                    <WarningIcon /> {error?.message}
                </p>
            )}

            {!!info && !!!error ? (
                <p className={`${styles.info} ${styles.note}`}>{info}</p>
            ) : null}

        </div>
    )
}

export default Input
