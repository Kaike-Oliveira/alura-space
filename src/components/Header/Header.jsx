// STYLES
import styles from './Header.module.scss';

// IMAGES
import logo from '../../resources/logo.png';
import searchIcon from '../../resources/search.png'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="Alura Space Logo"
      />
      <div className={styles.header__container}>
        <input
          className={styles.header__input}
          type="text"
          placeholder="What are you looking for?"
        />
        <img
          src={searchIcon}
          alt="Search"
        />
      </div>
    </header>
  )
}