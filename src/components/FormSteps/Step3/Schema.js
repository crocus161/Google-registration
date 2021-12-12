import * as yup from 'yup';

export const schema = yup.object().shape({
    confirmCode: yup.number().required('Обязательное поле').typeError('Код должен быть числом'),
});