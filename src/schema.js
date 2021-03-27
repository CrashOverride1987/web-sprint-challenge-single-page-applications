import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup
        .string()
        .required('Who are we delivering this to?'),
    size: Yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'size')
})