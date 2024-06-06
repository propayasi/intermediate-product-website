import './ClubPageCard.scss'

function ClubPageCard() {
  const clubDetails = [
    {
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

  const chunks = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const clubChunks = chunks(clubDetails, 3);

  return (
    <div className="ClubPageCardRow">
      {clubChunks.map((chunk, index) => (
        <div key={index} className="ClubPageCardContainerRow">
          {chunk.map((item) => (
            <div key={item.name} className="ClubPageCardContainer">
              <div className="ClubPageCardContainer__top">
                <div className="ClubPageCardContainer__top--imagCont">
                  <img className="ClubPageCardContainer__top--imagCont__image" src={item.image} />
                </div>
                <div className="ClubPageCardContainer__top--introCont">
                  <p className='ClubPageCardContainer__top--introCont__name'>{item.name}</p>
                  <p className='ClubPageCardContainer__top--introCont__desc'>{item.desc}</p>
                </div>
              </div>
              <div className="ClubPageCardContainer__middle">
                {item.content}
              </div>
              <div className="ClubPageCardContainer__bottom">
                <p className="ClubPageCardContainer__bottom--explore">Events</p>
                <p className="ClubPageCardContainer__bottom--learn">Learn More</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ClubPageCard;   