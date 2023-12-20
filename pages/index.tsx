import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CardsList from 'components/cards-list/CardsList';
import styles from './home.module.scss';
import cardsListData from '../json/cards-list.json';

const Home: NextPage = () => {
  return (
    <div className={styles['homepage']}>
      <Head>
        <title>Raison-test</title>
        <meta name="description" content="Raison-test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles['main']}>
        <div className="container">
          <div className={styles['main__header-wrapper']}>
            <h1 className={styles['main__title']}>Hello World</h1>
            <p className={styles['main__description']}>Always ready to meet with you.</p>
          </div>
          <div className={styles['main__grid']}>
            <div className={styles['main__background']}>
              <Image src={'/world-map.png'} width={1080} height={706} priority={true} />
            </div>
            <CardsList cardsList={cardsListData.data} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
