import * as yup from 'yup';

export const schema = yup.object().shape({
    confirmCode: yup.string().required('Обязательное поле'),
});