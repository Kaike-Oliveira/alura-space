// STYLE
import styles from './Menu.module.scss';

// ICONS
import home from '../../resources/icones/home.png';
import views from '../../resources/icones/views.png';
import likes from '../../resources/icones/likes.png';
import news from '../../resources/icones/news.png';
import surprise from '../../resources/icones/surprise.png';

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <img src={home} alt="Home" />
          <a href='/'>Home</a>
        </li>
        <li className={styles.menu__item}>
          <img src={views} alt="Most Views" />
          <a href='/'>Most Views</a>
        </li>
        <li className={styles.menu__item}>
          <img src={likes} alt="More likes" />
          <a href='/'>More likes</a>
        </li>
        <li className={styles.menu__item}>
          <img src={news} alt="News" />
          <a href='/'>News</a>
        </li>
        <li className={styles.menu__item}>
          <img src={surprise} alt="Surprise me" />
          <a href='/'>Surprise me</a>
        </li>
      </ul>
    </nav>
  )
}