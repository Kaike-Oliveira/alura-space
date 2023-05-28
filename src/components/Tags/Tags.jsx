// STYLE
import styles from './Tags.module.scss';

// IMAGES
import photos from '../Gallery/photos.json';

export const Tags = ({ tags, filter, reset }) => {
  return (
    <div className={styles.tags}>
      <p>Filter by tag:</p>
      <ul className={styles.tags__list}>
        {tags.map((tag) => {
          return (
            <li key={tag} onClick={() => filter(tag)}>{tag}</li>
          )
        })}
        <li onClick={() => reset(photos)}>All</li>
      </ul>
    </div>
  )
}