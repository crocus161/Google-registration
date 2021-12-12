import * as yup from 'yup';

export const schema = yup.object().shape({
    country: yup.string().required('Обязательное поле'),
    phone: yup.number().required('Обязательное поле').typeError('Телефон не может иметь буквы или специальные символы'),
});