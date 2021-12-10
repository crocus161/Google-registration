import React from 'react';
import * as yup from 'yup';
import Step from '../Step/Step';
import styles from './Step2.module.scss'
import { useForm } from 'react-hook-form';
import Input from '../../../common/Input/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../common/Button/Button';
import { useData } from '../../../context/DataContext';
import { useNavigate } from 'react-router';
import PhonePicker from '../PhonePicker/PhonePicker';

const schema = yup.object().shape({
    country: yup.string().required('Обязательное поле'),
    phone: yup.string().required('Обязательное поле'),
});

const Step2 = () => {
    const { register, formState: { errors }, handleSubmit, watch } = useForm({ mode: 'onTouched', resolver: yupResolver(schema) });
    const {data, setValues} = useData();
    const navigate = useNavigate();

    const submit = data => {
        setValues(data);
        navigate('/form/step3')
    }

    return (

        <div>
            <Step
                title='Подтвердите номер телефона'
                handleSubmit={handleSubmit(submit)}
            >

                <p>В целях безопасности мы должны убедиться, что это действительно вы. Мы отправим вам SMS с 6-значным кодом подтверждения. <em>Плата за доставку сообщений взимается в соответствии с вашим тарифом.</em></p>

                <PhonePicker register={register} errors={errors}/>

                <div className={styles.btngroup}>
                    <Button fill={false}>Назад</Button>
                    <Button fill={true}>Далее</Button>
                </div>

            </Step>
        </div>
    )
}

export default Step2;
