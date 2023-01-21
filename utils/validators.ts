import EmailValidator from 'email-validator'

export const emailValid = (val: string) => {
    return EmailValidator.validate(val)
}