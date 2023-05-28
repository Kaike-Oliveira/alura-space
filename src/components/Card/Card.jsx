// IMAGES
import open from '../../resources/open.png';
import like from '../../resources/favorito.png';

export const Card = ({item, styles}) => {
  return (
    <li className={styles.gallery__card}>
      <img
        className={styles.gallery__image}
        src={item.image}
        alt={item.title}
      />
      <p className={styles.gallery__description}>{item.title}</p>
      <div>
        <p>{item.credits}</p>
        <span>
          <img src={like} alt="Like" />
          <img src={open} alt="Open" />
        </span>
      </div>
    </li>
  )
}