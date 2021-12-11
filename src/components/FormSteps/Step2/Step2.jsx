import React from 'react';
import Step from '../Step/Step';
import { schema } from './Schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from '../../../context/DataContext';
import PhonePicker from '../../../common/FormBlocks/PhonePicker/PhonePicker';

const Step2 = () => {
    const { data } = useData();
    const {
        register, formState: { errors }, handleSubmit
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(schema),
        defaultValues: {
            country: data?.country,
            phone: data?.phone
        }
    });

    return (
        <Step
            title='Подтвердите номер телефона'
            handleSubmit={handleSubmit}
            path='/form/step3'
        >
            <p>В целях безопасности мы должны убедиться, что это действительно вы. Мы отправим вам SMS с 6-значным кодом подтверждения. <em>Плата за доставку сообщений взимается в соответствии с вашим тарифом.</em></p>
            <PhonePicker register={register} errors={errors} label='Номер телефона' name='phone' countryName='country' />
        </Step>
    );
}

export default Step2;