import React from 'react'
import Input from '../Input/Input'
import styles from './AddressPicker.module.scss';

const AddressPicker = ({register, errors, name, label, info}) => {
    return (
        <div className={styles.nickname}>
            <Input 
                name={name} 
                label={label}
                errors={errors} 
                register={register} 
                info={info ? info : 'Можно использовать буквы латинского алфавита, цифры и точки.'}
            />
            <span>@gmail.com</span>
        </div>
    )
}

export default AddressPicker
