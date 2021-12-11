import * as yup from 'yup';

export const schema = yup.object().shape({
    birthday: yup.object({
        day: yup.number().max(31, 'Укажите правильную дату').min(1, 'Укажите правильную дату').typeError('День должен быть числом').required('Обязательное поле'),
        month: yup.string().required('Обязательное поле'),
        year: yup.number().min(1000, 'Укажите правильную дату').required('Обязательное поле').typeError('Год должен быть числом')
    }),
    gender: yup.string().required('Обязательное поле')
});