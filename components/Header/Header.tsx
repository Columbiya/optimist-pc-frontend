import { ROUTES } from "@/utils/routes"
import Link from "next/link"
import { Container } from "../Container/Container"
import { Link as ReactScrollLink } from "react-scroll"
import css from './style.module.scss'


export const Header: React.FC = () => {
    return (
            <header className={css.header}>
                <Container>
                    <Link href={ROUTES.HOME} className={css.logo}>Logo</Link>

                    <nav className={css.nav}>
                        <Link href={ROUTES.HOME}>Сборка пк</Link>
                        <Link href={ROUTES.HOME}>Оставить заявку</Link>
                        <Link href={ROUTES.HOME}>Тест комплектующих</Link>
                        <ReactScrollLink to="about-us" duration={500} smooth>О нас</ReactScrollLink>
                    </nav>
                </Container>
                    
            </header>
    )
}