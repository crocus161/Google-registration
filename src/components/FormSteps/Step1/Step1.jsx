import React from 'react'
import Step from '../Step/Step';
import { schema } from './Shema';
import styles from './Step1.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from '../../../context/DataContext';
import Input from '../../../common/FormBlocks/Input/Input';
import AddressPicker from '../../../common/FormBlocks/AddressPicker/AddressPicker';
import ParoleVisible from '../../../common/FormBlocks/ParoleVisible/ParoleVisible';

const Step1 = () => {
    const { data } = useData();

    const { register, formState: { errors }, handleSubmit, watch
    } = useForm({
        mode: 'onTouched', resolver: yupResolver(schema),
        defaultValues: {
            firstName: data?.firstName,
            lastName: data?.lastName,
            nickname: data?.nickname,
            passwordVisibility: data?.passwordVisibility,
        },
    });

    const passwordVisibility = watch('passwordVisibility'),
        passwordType = passwordVisibility ? 'text' : 'password';

    return (
        <Step
            title='Создайте аккаунт Google'
            handleSubmit={handleSubmit}
            path='/form/step2'
            isFirst
        >
            <div className={`${styles.line} ${styles.name}`}>
                <Input errors={errors} register={register} label='Имя' name='firstName' />
                <Input errors={errors} register={register} label='Фамилия' name='lastName' />
            </div>

            <AddressPicker
                name='nickname'
                errors={errors}
                register={register}
                label='Имя пользователя'
            />

            <div className={`${styles.line} ${styles.password}`}>
                <Input errors={errors} register={register} label='Пароль' name='password' type={passwordType} info='Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы' />
                <Input errors={errors} register={register} label='Подтвердить' name='confirmPassword' type={passwordType} />
            </div>

            <ParoleVisible register={register} />
        </Step>
    );
}

export default Step1