import React from 'react';
import Step from '../Step/Step';
import { schema } from './Schema';
import styles from './Step4.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from '../../../context/DataContext';
import Input from '../../../common/FormBlocks/Input/Input';
import AvaIcon from '../../../assets/ava.svg?react';
import PhonePicker from '../../../common/FormBlocks/PhonePicker/PhonePicker';
import AddressPicker from '../../../common/FormBlocks/AddressPicker/AddressPicker';


const Step4 = () => {
    const { data } = useData();

    const {
        register, formState: { errors }, handleSubmit, watch
    } = useForm({
        mode: 'onTouched', resolver: yupResolver(schema), defaultValues: {
            country: data?.country,
            phone: data?.phone,
            reserveEmail: data?.reserveEmail,
            birthday: {
                day: data?.birthday?.day,
                month: data?.birthday?.month,
                year: data?.birthday?.year,
            },
            gender: data?.gender
        },
    });

    return (
        <Step
            title='Добро пожаловать в Google'
            handleSubmit={handleSubmit}
            path='/form/result'
        >
            <div className={styles.email__box}>
                <AvaIcon className={styles.email__ava} />
                <p className={styles.email__text}>{data?.nickname + '@gmail.com'}</p>
            </div>

            <PhonePicker register={register} errors={errors} label='Номер телефона' name='phone' countryName='country' />
            <p className={styles.info}>Google будет использовать этот номер только для обеспечения безопасности вашего аккаунта. Номер не будет виден другим пользователям. При желании вы сможете выбрать, нужно ли использовать его для других целей.</p>

            <AddressPicker errors={errors} register={register} label='Резервный адрес электронной почты (необязательно)' name='reserveEmail' info='Он поможет нам защитить ваш аккаунт' />

            <div className={styles.date}>
                <Input errors={errors?.birthday?.day} associative={true} register={register} label='День' name='birthday.day' info='Дата рождения' />
                
                <select {...register('birthday.month')} defaultValue=''>
                    <option value='' disabled selected>Месяц</option>
                    <option value="Январь">Январь</option>
                    <option value="Февраль">Февраль</option>
                    <option value="Март">Март</option>
                    <option value="Апрель">Апрель</option>
                    <option value="Май">Май</option>
                    <option value="Июнь">Июнь</option>
                    <option value="Июль">Июль</option>
                    <option value="Август">Август</option>
                    <option value="Сентябрь">Сентябрь</option>
                    <option value="Октябрь">Октябрь</option>
                    <option value="Ноябрь">Ноябрь</option>
                    <option value="Декабрь">Декабрь</option>
                </select>

                <Input errors={errors?.birthday?.year} associative={true} register={register} label='Год' name='birthday.year' />
            </div>

            <select {...register('gender')} defaultValue='' className={styles.gender}>
                <option value='' disabled selected>Пол</option>
                <option value="Мужской">Мужской</option>
                <option value="Женский">Женский</option>
                <option value="Средний">Средний</option>
                <option value="Никакой">Никакой</option>
            </select>

        </Step>
    )
}

export default Step4;
