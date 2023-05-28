// STYLE
import style from './Banner.module.scss';

// IMAGE
import banner from '../../resources/banner.png';

export const Banner = () => {
  return (
  <div className={style.banner}>
    <h1>The most complete space gallery</h1>
    <img src={banner} alt="banner" />
  </div>
  )
}