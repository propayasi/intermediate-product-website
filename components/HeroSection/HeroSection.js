import './HeroSection.scss'

function HeroSection() {
    return (
        <div className='HeroSectionContainer'>
            <div className='HeroSectionContainer__left'>
                <p className='HeroSectionContainer__left--heading'>Welcome to the New<br />Era of Fittness with<br/>BROTIEN</p>
                <p className='HeroSectionContainer__left--description'>At BROTIEN we unite to make your fitness journey enhanced with the new and improved BROIEN BAR </p>
 
                <div className='HeroSectionContainer__left--buttons'>
                    <p className='HeroSectionContainer__left--buttons__explore'>Products</p>
                    <p className='HeroSectionContainer__left--buttons__about'>About Us</p>
                </div>
                
                <div className='HeroSectionContainer__left--sponsors'>
                    <p className='HeroSectionContainer__left--sponsors__text'>OUR TOP SPONSORS</p>
                    <img src='/Images/Homepage/sponsors.png' className='HeroSectionContainer__left--sponsors__image' />
                </div>
            </div>
            <div className='HeroSectionContainer__right'>
                <img src='/Images/Homepage/brotien_bar_final1.png' className='HeroSectionContainer__right--image1' />
                
            </div>
        </div>
    )
}

export default HeroSection;