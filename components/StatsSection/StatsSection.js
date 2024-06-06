import './StatsSection.scss'

function StatsSection() {
    return (
    <div className='StatsContainer'>
        <div className='StatsContainer__top'>
            <div className='StatsContainer__top--left'>
                <p className='StatsContainer__top--left__hashtag'># ShareYourProtienWithBrotien</p>
                <p className='StatsContainer__top--left__heading'>Data-Driven Insights<br />for your Brotien</p>
            </div>
            <div className='StatsContainer__top--right'>
                <p className='StatsContainer__top--right__description'>Highlighting the impact of the Brotien Bar & demonstrating the commitment to promoting the Brotien cultural.</p>
            </div>
        </div>
        <div className='StatsContainer__bottom'>
            <div className='StatsContainer__bottom--video'>
                <iframe width="560" height="315" src="https://www.youtube.com/watch?v=9mdqyA8eLDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='StatsContainer__bottom--stats'>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>18G</p>
                    <p className='StatsContainer__bottom--stats__item--title'> Protien</p>
                </div>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>5.5G</p>
                    <p className='StatsContainer__bottom--stats__item--title'>Creatine</p>
                </div>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>20+</p>
                    <p className='StatsContainer__bottom--stats__item--title'>Essential Vitamins</p>
                </div>
                <div className='StatsContainer__bottom--stats__item'>
                    <p className='StatsContainer__bottom--stats__item--value'>10K+</p>
                    <p className='StatsContainer__bottom--stats__item--title'>Monthly Consuers</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StatsSection;