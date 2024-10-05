import './styles.scss'
import LeaderImage from '../../../assets/our-story/leader.png';

const LeaderProfile = () => {
    return (
        <div className="leader-profile">

            <div className="leader-info">
                <p>
                    Nisha Sidhwani is a visionary leader with a passion for building innovative solutions. As the Business Head of Interact Suite, a leading provider of customer communications management (CCM) solutions, she spearheads the company's global operations, overseeing product portfolios across a wide range of territories including the USA, UK, Europe, APAC, Middle East, and Africa.
                </p>
                <p>
                    Her leadership has been instrumental in driving a successful business transformation for Interact Suite. Nisha is known for her practical approach, fostering a culture of transparency, accountability, and shared values within the organisation.
                </p>

                <div>
                    <h2>- Nisha Sidhwani</h2>
                    <p>CEO and Founder, Interact Suite</p>
                </div>
            </div>

            <div className="leader-image">
                <img src={LeaderImage} alt="Nisha Sidhwani" />
            </div>
        </div>
    );
};

export default LeaderProfile