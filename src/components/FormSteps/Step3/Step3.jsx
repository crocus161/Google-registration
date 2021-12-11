import React from 'react';
import Step from '../Step/Step';
import { schema } from './Schema';
import styles from './Step3.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from '../../../context/DataContext';
import Input from '../../../common/FormBlocks/Input/Input';
import VerificationPicker from '../../../common/FormBlocks/VerificationPicker/VerificationPicker';

const Step3 = () => {
    const { data } = useData();
    const {
        register, formState: { errors }, handleSubmit
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
        defaultValues: {
            confirmCode: data?.confirmCode
        }
    });

    return (
        <Step
            title='Подтвердите номер телефона'
            handleSubmit={handleSubmit}
            path='/form/step4'
        >
            <p>В целях безопасности мы должны убедиться, что это действительно вы. Мы отправим вам SMS с 6-значным кодом подтверждения. <em>Плата за доставку сообщений взимается в соответствии с вашим тарифом.</em></p>
            <VerificationPicker errors={errors} register={register} />
        </Step>
    )
}

export default Step3;
