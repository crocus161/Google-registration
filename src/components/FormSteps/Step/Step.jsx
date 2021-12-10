import {ReactComponent as LogoIcon} from '../../../assets/logo.svg';
import styles from './Step.module.scss';
import React from 'react'

const Step = ({title, children, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <LogoIcon className={styles.logo} />
            <h1 className={styles.title}>{title}</h1>
            {children}
        </form>
    )
}

export default Step
