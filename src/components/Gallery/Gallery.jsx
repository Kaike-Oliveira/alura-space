// CORE
import { useState } from 'react';

// STYLE
import styles from './Gallery.module.scss';

// COMPONENTS
import { Tags } from '../Tags/Tags';
import { Cards } from '../Cards/Cards';

// IMAGES
import photos from './photos.json';

export const Gallery = () => {

    const [itens, setItens] = useState(photos);

    const tags = [...new Set(photos.map((value) => value.tag))];

    const filterPhotos = (tag) => {
      const newPhotos = photos.filter((photo) => {
        return photo.tag === tag;
      })

      setItens(newPhotos);
    }

    return (
      <section className={styles.gallery}>
        <h2>Surf by Gallery!</h2>
        <Tags tags={tags} filter={filterPhotos} reset={setItens} />
        <Cards itens={itens} styles={styles}/>
      </section>
    )
}