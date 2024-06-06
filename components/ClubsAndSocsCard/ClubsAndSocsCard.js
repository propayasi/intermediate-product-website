import './ClubsAndSocsCard.scss'

function ClubsAndSocsCard() {
    const clubDetails = [
        {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "BROTIEN",
            "desc": "The Protien bar",
            "content": "Brotien: A delicious and nutritious high-protein bar designed to fuel your active lifestyle and keep you energized throughout the day."
        },
        {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "BROTIEN",
            "desc": "The Protien bar",
            "content": "Brotien: A delicious and nutritious high-protein bar designed to fuel your active lifestyle and keep you energized throughout the day."
        }, {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "BROTIEN",
            "desc": "The Protien bar",
            "content": "Brotien: A delicious and nutritious high-protein bar designed to fuel your active lifestyle and keep you energized throughout the day."
        }, {
            "image": '/Images/ClubsAndSocieties/clubProfile.png',
            "name": "BROTIEN",
            "desc": "The Protien bar",
            "content": "Brotien: A delicious and nutritious high-protein bar designed to fuel your active lifestyle and keep you energized throughout the day."
        }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "BROTIEN Bar",
      "desc": "The Protieb bar of tommorow",
      "content": "Brotien: A delicious and nutritious high-protein bar designed to fuel your active lifestyle and keep you energized throughout the day."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "Bro-Beast",
      "desc": "Brotien Preworkout",
      "content": "Energize your workouts with Brotien Preworkout, a potent blend of ingredients designed to boost your endurance, focus, and performance for peak results."
    }, {
      "image": '/Images/ClubsAndSocieties/clubProfile.png',
      "name": "Bro-Brute",
      "desc": "Brotien Powder Whey Isolate",
      "content": "Maximize your muscle gains with Brotien Powder Whey Isolate, a premium protein supplement offering pure, fast-absorbing protein to support muscle recovery and growth."
    },
    ]
    return (
        clubDetails.map((item) => {
            return (
            <div key={item.name} className="ClubsAndSocsCardContainer">
                <div className="ClubsAndSocsCardContainer__top">
                    <div className="ClubsAndSocsCardContainer__top--imagCont">
                        <img className="ClubsAndSocsCardContainer__top--imagCont__image" src={item.image} />
                    </div>
                    <div className="ClubsAndSocsCardContainer__top--introCont">
                        <p className='ClubsAndSocsCardContainer__top--introCont__name'>{item.name}</p>
                        <p className='ClubsAndSocsCardContainer__top--introCont__desc'>{item.desc}</p>
                    </div>
                </div>
                <div className="ClubsAndSocsCardContainer__middle">
                    {item.content}
                </div>
                <div className="ClubsAndSocsCardContainer__bottom">
                    <p className="ClubsAndSocsCardContainer__bottom--explore">Buy Now</p>
                    <p className="ClubsAndSocsCardContainer__bottom--learn">Learn More</p>
                </div>
            </div>
            )
        })
    )
}

export default ClubsAndSocsCard;