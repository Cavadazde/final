import * as Yup from 'yup';

 const addFormValidations= Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.number().required(),
    image: Yup.string().url().required(),
    isNewProduct: Yup.bool().required(),
    discountPercentage: Yup.number().required()

})

export default addFormValidations