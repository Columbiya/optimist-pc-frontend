import css from './style.module.scss'

interface ContainerProps {
    children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className={css.container}>
            {children}
        </div>
    )
}