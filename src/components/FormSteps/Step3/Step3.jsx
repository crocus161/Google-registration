import React from 'react';
import * as yup from 'yup';
import Step from '../Step/Step';
import styles from './Step3.module.scss'
import { useForm } from 'react-hook-form';
import Input from '../../../common/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../common/Button/Button';
import { useData } from '../../../context/DataContext';
import { useNavigate } from 'react-router';

const schema = yup.object().shape({
    confirmCode: yup.string().required('Обязательное поле'),
});

const Step3 = () => {
    const { register, formState: { errors }, handleSubmit} = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });

    const {data, setValues} = useData();
    const navigate = useNavigate();

    const submit = data => {
        setValues(data);
        navigate('/form/step4');
    }

    return (

        <div>
            <Step
                title='Подтвердите номер телефона'
                handleSubmit={handleSubmit(submit)}
            >

                <p>В целях безопасности мы должны убедиться, что это действительно вы. Мы отправим вам SMS с 6-значным кодом подтверждения. <em>Плата за доставку сообщений взимается в соответствии с вашим тарифом.</em></p>

                <div className={styles.verification}>
                    <span>G-</span>
                    <Input errors={errors} register={register} label='Введите код подтверждения' name='confirmCode' type='text' />
                </div>

                <div className={styles.btngroup}>
                    <Button fill={false}>Назад</Button>
                    <Button fill={true}>Далее</Button>
                </div>

            </Step>

        </div>
    )
}

export default Step3;
