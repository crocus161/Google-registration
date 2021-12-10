import React from 'react'
import * as yup from 'yup';
import Step from '../Step/Step';
import styles from './Step1.module.scss';
import { useForm } from 'react-hook-form';
import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router';
import { useData } from '../../../context/DataContext';

const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры').required('Имя это обязательное поле'),
    lastName: yup.string().matches(/^([^0-9]*)$/, 'Фамилия не должна содержать цифры').required('Фамилия это обязательное поле'),
    nickname: yup.string().required('Укажите адрес GMAIL'),
    password: yup.string()
                .required('Поле должно быть заполнено')
                .min(8, 'Пароль должен содержать не менее восьми знаков')
                .matches(/(?=.*\d)/g, 'Пароль должен содержать цифры')
                .matches(/(?=.*?[A-Z])/g, 'Пароль должен заглавные буквы')
                .matches(/(?=.*?[\W_])/g, 'Пароль должен содержать специальный символ'),
                
    confirmPassword: yup.string().required('Поле должно быть заполнено').oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
});

const Step1 = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, watch } = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });
    const {data, setValues} = useData();
    
    const submit = data => {
        setValues(data);
        navigate('/form/step2');
    };

    const passwordVisibility = watch('password-visibility'),
        passwordType = passwordVisibility ? 'text' : 'password';

    return (
        <div>

            <Step
                title='Создайте аккаунт Google'
                handleSubmit={handleSubmit(submit)}
            >

                <div className={styles.line}>
                    <Input errors={errors} register={register} label='Имя' name='firstName' />
                    <Input errors={errors} register={register} label='Фамилия' name='lastName' />
                </div>

                <div className={styles.nickname}>
                    <Input errors={errors} register={register} label='Имя пользователя' name='nickname' info='Можно использовать буквы латинского алфавита, цифры и точки.' />
                    <span>@gmail.com</span>
                </div>

                <div className={`${styles.line} ${styles.password}`}>
                    <Input errors={errors} register={register} label='Пароль' name='password' type={passwordType} info='Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы' />
                    <Input errors={errors} register={register} label='Подтвердить' name='confirmPassword' type={passwordType} />
                </div>

                <div className={styles.password__checkbox}>
                    <input {...register('password-visibility')} type='checkbox' id='checkbox' />
                    <label htmlFor='checkbox'>Показать пароль</label>
                </div>

                <Button fill={true}>Далее</Button>
            </Step>

        </div>
    )
}

export default Step1
