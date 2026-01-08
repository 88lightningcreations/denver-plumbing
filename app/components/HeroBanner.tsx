import Image from 'next/image';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
    return (
        <div className="hero-banner">
            <Image src="/PTP-LOGO.jpg" alt="PTP anner" layout="responsive" width={720} height={405} />
        </div>
    );
};

export default HeroBanner;
