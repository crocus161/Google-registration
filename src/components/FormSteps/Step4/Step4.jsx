import React from 'react';
import * as yup from 'yup';
import Step from '../Step/Step';
import styles from './Step4.module.scss'
import { useForm } from 'react-hook-form';
import Input from '../../../common/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../common/Button/Button';
import { useData } from '../../../context/DataContext';
import { useNavigate } from 'react-router';
import {ReactComponent as AvaIcon} from '../../../assets/ava.svg';
import PhonePicker from '../PhonePicker/PhonePicker';

const schema = yup.object().shape({
    confirmCode: yup.string().required('Обязательное поле'),
});

const Step4 = () => {
    const {data, setValues} = useData();

    const { 
        register, formState: { errors }, handleSubmit, watch 
    } = useForm({ mode: 'onTouched', resolver: yupResolver(schema), defaultValues: {
        country: data?.country,
        phone: data?.phone
    }, });

    const navigate = useNavigate();
    console.log(data);
    const submit = data => {

        setValues(data);
        navigate('/result');
    }

    return (

        <div>
            <Step
                title='Добро пожаловать в Google'
                handleSubmit={handleSubmit(submit)}
            >   
                <div className={styles.email__box}>
                    <AvaIcon className={styles.email__ava}/>
                    <p className={styles.email__text}>{data?.nickname + '@gmail.com'}</p>
                </div>

                <PhonePicker register={register} errors={errors}/>
                <p className={styles.info}>Google будет использовать этот номер только для обеспечения безопасности вашего аккаунта. Номер не будет виден другим пользователям. При желании вы сможете выбрать, нужно ли использовать его для других целей.</p>

                <Input errors={errors} register={register} label='Резервный адрес электронной почты (необязательно)' name='reserveEmail' info='Он поможет нам защитить ваш аккаунт'/>
            
                <div className={styles.date}>
                    <Input errors={errors} register={register} label='День' name='birthday.day' info='Дата рождения'/>
                    <Input errors={errors} register={register} label='Месяц' name='birthday.month'/>
                    <Input errors={errors} register={register} label='Год' name='birthday.year'/>
                </div>

                <select {...register('gender')} className={styles.gender} placeholder='Пол'>
                    <option value="" disabled selected>Пол</option>
                    <option value="Мужской">Мужской</option>
                    <option value="Женский">Женский</option>
                    <option value="Средний">Средний</option>
                    <option value="Никакой">Никакой</option>
                </select>

                <div className={styles.btngroup}>
                    <Button fill={false}>Назад</Button>
                    <Button fill={true}>Далее</Button>
                </div>
            </Step>

        </div>
    )
}

export default Step4;
