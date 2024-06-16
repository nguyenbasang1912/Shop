import * as yup from 'yup'

const loginSchema = yup.object({
    email: yup.string().email('')
})