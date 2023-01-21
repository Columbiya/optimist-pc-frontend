import classNames from "classnames"
import css from './style.module.scss'

interface ButtonProps {
    isFilled?: boolean
    onClick?: () => void
    children: React.ReactNode
    uppercase?: boolean
}

export const Button: React.FC<ButtonProps> = ({ isFilled, onClick, children, uppercase }) => {
    return (
        <button className={classNames(css.button, {
            [css.filled]: isFilled,
            [css.uppercase]: uppercase
        })} onClick={onClick}>
            {children}
        </button>
    )
}