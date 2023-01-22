import Head from 'next/head'
import { Roboto } from '@next/font/google'
import { Header } from '@/components/Header/Header'
import css from '../styles/index.module.scss'
import { Container } from '@/components/Container/Container'
import { Element } from 'react-scroll'
import { FeedbackForm } from '@/components/FeedbackForm/FeedbackForm'

const roboto = Roboto({ subsets: ['cyrillic'], weight: ['400', '500', '700'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Собери ПК своей мечты" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
          <Header />

          <div className={css.lineContainer}>
            <Line />

            <Line />
          </div>

          <div className={css.mainScreen}>
            <Container>
              <h1 className={css.title}>Optimist PC</h1>

              <p className={css.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Container>
          </div>

          <Element name='about-us' className={css.aboutUs}>
            <Container>
              <h2 className={css.titleSmall}>О нас</h2>

              <p className={css.text}>
                Наша команда подберет вам <span className="red">самый</span> выгодный компьютер, 
                исходя из <span className="red">ваших</span> нужд на несколько лет вперед
              </p>
            </Container>
          </Element>

          <Container>
            <FeedbackForm />
          </Container>
      </main>
    </>
  )
}

const Line: React.FC = () => {
  return (
    <svg width="366" height="1082" viewBox="0 0 366 1082" fill="none" xmlns="http://www.w3.org/2000/svg" className={css.line}>
      <line x1="2.37105" y1="1.20745" x2="363.371" y2="1081.21" stroke="#D72626" strokeWidth="5"/>
    </svg>
  )
}