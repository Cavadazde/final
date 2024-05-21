import * as Yup from 'yup';

const addFormValidations=Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.number().required(),
    description: Yup.string().required(),
    image: Yup.string().url().required()
})
export default addFormValidations