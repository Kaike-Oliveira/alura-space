// STYLE
import styles from './HomePage.module.scss';

// COMPONENTS
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { Gallery } from '../../components/Gallery/Gallery';
import { Popular } from '../../components/Popular/Popular.jsx';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.principal}>
          <Menu />
          <Banner />
        </div>
        <div className={styles.gallery}>
          <Gallery />
          <Popular />
        </div>
      </main>
      <Footer />
    </>
  )
}