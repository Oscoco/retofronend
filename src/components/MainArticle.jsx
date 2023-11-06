import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <section>
        <picture>
          <source media="(max-widh: 640px)" srcSet={imageMobile} />
          <source media="(min-widh: 641px)" srcSet={imageDesktop} />
          <img src={imageMobile} alt="Principal Article img" />
        </picture>
    </section>
  )
}
