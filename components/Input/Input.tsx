import { FieldError } from 'react-hook-form'
import css from './style.module.scss'

interface InputProps {
    register: any
    name: string
    validate?: any
    errors?: FieldError
    placeholder?: string
}

export const Input: React.FC<InputProps> = ({ errors, name, placeholder, register, validate }) => {
    errors && console.log(errors)
    return (
        <div className={css.input}>
            <input 
                {...register(name, {
                    validate
                })}
                placeholder={placeholder}
            />

            <span className="error">{errors?.type}</span>
        </div>
    )
}