import styles from './Button.module.scss';
import React from 'react'

const Button = ({children, onClick, fill,  ...props}) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={`${styles.button} ${fill ? styles.fill : styles.primary}`}
        >
            {children}
        </button>
    );
}

export default Button
