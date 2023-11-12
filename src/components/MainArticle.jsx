import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainArticle = () => {
  return (
    <section>
        <picture>
          <source media="(max-width: 640px)" srcSet={imageMobile} />
          <source media="(min-width: 641px)" srcSet={imageDesktop} />
          {/*img to defect */}
          <img src={imageMobile} alt="img Principal Article" />
        </picture>

      <div className='sm:flex'>
        
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] font-bold sm:[58px] leading-none'> The Bright Fature of web 3.0</h2>
        </div>

        <div className='flex-1 pt-9'>
          <p className='text-[13px] mb-10 sm:text-[15px]'>We dive into the next evolution of the web that claims to put the power of the plataforms back into the hands of the people. But is it really fulfilling its Promise</p>
          
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite  hover:bg-VeryDarkBlue' type="button">READ MORE</button>
        
        </div>
      </div>    
        

    </section>
  )
}

