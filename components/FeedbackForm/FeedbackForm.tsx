import { emailValid } from "@/utils/validators"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { OptionProps } from "react-select"
import Select from "react-select"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import css from './style.module.scss'
import axios from "axios"

const questionOptions = [
    {value: 'сборка', label: 'Сборка ПК'},
    {value: 'совет', label: 'Совет по сборке пк'},
]

interface FormValues {
    email: string
    name: string
    question: string
}

export const FeedbackForm: React.FC = () => {
    const { register, formState: { errors }, handleSubmit, setValue, setError, reset } = useForm<FormValues>()

    const onSubmit = useCallback((values: FormValues) => {
        if (!values.question) {
            setError("question", {message: "Это поле должно быть заполнено"})

            return
        }

        try {
            axios.post('http://localhost:5000/api/bot-send', {
                text: `Клиент ${values.name} оставил заявку с просьбой ${values.question}.\nEmail клиента: ${values.email}`
            })
        } catch(e) {
            console.log(e)
        }



        reset()
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                <Input 
                    register={register}
                    name="name"
                    errors={errors.name}
                    placeholder="Ваше Имя"
                />

                <Input 
                    register={register}
                    name="email"
                    errors={errors.email}
                    placeholder="Ваш Email"
                    validate={{
                        "Введите валидный email": emailValid
                    }}
                />
                
                <Select 
                    className={css.select}
                    styles={{
                        placeholder: (baseStyles, state) => ({
                            ...baseStyles,
                            textAlign: "center",
                            fontSize: "2rem"
                        }),
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            padding: 26,
                            background: "#D9D9D9",
                        })
                    }}
                    required
                    onChange={op => setValue('question', op ? op.value: '')} 
                    options={questionOptions} />

                {errors.question && 
                    <span className="error">
                        {errors.question.message}
                    </span> 
                }

                <Button
                    isFilled
                    uppercase>
                    оставить заявку
                </Button>
            </form>
        </>
    )
}