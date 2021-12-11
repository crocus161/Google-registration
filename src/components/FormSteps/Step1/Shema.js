import * as yup from 'yup';

export const schema = yup.object().shape({
    firstName: yup.string().matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры').required('Имя это обязательное поле'),
    lastName: yup.string().matches(/^([^0-9]*)$/, 'Фамилия не должна содержать цифры').required('Фамилия это обязательное поле'),
    nickname: yup.string().required('Укажите адрес GMAIL'),
    password: yup.string()
                .required('Поле должно быть заполнено')
                .min(8, 'Пароль должен содержать не менее восьми знаков')
                .matches(/(?=.*\d)/g, 'Пароль должен содержать цифры')
                .matches(/(?=.*?[A-Z])/g, 'Пароль должен заглавные буквы')
                .matches(/(?=.*?[\W_])/g, 'Пароль должен содержать специальный символ'),
                
    confirmPassword: yup.string().required('Поле должно быть заполнено').oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
});