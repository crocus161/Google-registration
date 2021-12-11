import React from 'react';
import Input from '../Input/Input';
import styles from './PhonePicker.module.scss';

const PhonePicker = ({register, errors, label, name, countryName}) => {
    return (
        <div className={styles.line}>
            <select {...register(countryName)} className={styles.select}>
                <option value="UK">🇺🇦 Украина (+380)</option>
                <option value="AU">🇦🇺 Австралия (+61)</option>
                <option value="AT">🇦🇹 Австрия (+43)</option>
                <option value="AZ">🇦🇿 Азейбарджан (+994)</option>
                <option value="AL">🇦🇱 Албания (+355)</option>
                <option value="DZ">🇩🇿 Алжир (+213)</option>
                <option value="AS">🇦🇸 Самоа (+1)</option>
                <option value="AI">🇦🇮 Ангилья (+1)</option>
            </select>

            <Input errors={errors} register={register} label={label} name={name} type='tel' />
        </div>
    )
}

export default PhonePicker
