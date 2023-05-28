// STYLE
import styles from './Popular.module.scss';

// IMAGES
import popularPhotos from './popular.json';

// COMPONENTS
import { Button } from '../Button/Button';

export const Popular = () => {
  return (
    <aside className={styles.popular}>
      <h2>Popular</h2>
      <ul className={styles.popular__images}>
        {popularPhotos.map((popularPhoto) => {
          return (
            <li key={popularPhoto.id}>
              <img src={popularPhoto.path} alt={popularPhoto.alt} />
            </li>
          )
        })}
      </ul>
      <Button>See more photos</Button>
    </aside>
  )
}