import './Home.scss';
const LiveTrail = require('../../assets/livetrail.png');
const LiveTrack = require('../../assets/livetrack.png');

export function Home() {
    return (<div className="Home">
        <section className='FirstSection'>
            <div>
                <h4>
                    Cherches une course et analyse le classement prévisoire
                </h4>
                <h5 >
                    Deux plateformes maintenues
                </h5>
                <h5 className='Plateformes'>
                    Live trail / Live Track
                </h5>
            </div>
            <div className='ImgContainer'>
                <img alt="livetrail" src={LiveTrail}></img>
            </div>
        </section>
        <section className='FirstSection'>
            <div>
                <h4>
                    Exemple LiveTrack
                </h4>
            </div>
            <div className='ImgContainer'>
                <img alt="livetrack" src={LiveTrack}></img>
            </div>
        </section>
    </div>
    )
}