import React from 'react'
import Input from '../Input/Input';
import styles from './VerificationPicker.module.scss';

const VerificationPicker = ({register, errors}) => {
    return (
        <div className={styles.verification}>
            <span>G-</span>
            <Input errors={errors} register={register} label='Введите код подтверждения' name='confirmCode' type='text' />
        </div>
    )
}

export default VerificationPicker
