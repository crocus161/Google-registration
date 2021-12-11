import * as yup from 'yup';

export const schema = yup.object().shape({
    country: yup.string().required('Обязательное поле'),
    phone: yup.string().required('Обязательное поле'),
});