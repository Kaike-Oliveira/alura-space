// COMPONENTS
import { Card } from "../Card/Card"


export const Cards = ({itens, styles}) => {
  return (
    <ul className={styles.gallery__cards}>
        {itens.map((item) => {
          return(
            <Card key={item.id} item={item} styles={styles} />
          )
        })}
    </ul>
  )
}