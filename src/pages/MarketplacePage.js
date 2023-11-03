import React from "react";
import Header from "../components/header";
import FooterImg from '../images/footer.svg';
import FooterBottom from '../images/bottom-footer.svg';
import FirstSec from '../images/first-sec.png';
import Secline from '../images/sec-line.svg';
import FlowerBox from '../images/flowerbox.svg';
import Sign from '../images/Vector.svg';
import MarketCard from '../images/marketCard.svg';
import CATCard from '../images/ctaBox.svg';
import GetStarted from '../images/getStarted.svg';
import '../styles/marketplace.css';
import Footer from "../components/footer";


const MarketplacePage = () => {

    return (
        <main>
            <Header />
            <section className="top-section">
                <div className="row">
                    <div className="col-md-7 my-auto">
                        <h1 className="fontBold lh-base">Invest with Ease: Track Stocks, Make <font className="primary-color">Informed Choices!</font></h1>
                        <div className="text-center" style={{ marginTop: "-10px" }}><img src={Sign} /></div>
                        <button className="primary-btn px-5 w-25 mt-3">Sign up </button>
                    </div>
                    <div className="col-md-5 text-end">
                        <img src={FlowerBox} />
                    </div>
                </div>
            </section>
            <img src={Secline} width="100%" />
            <section className="second-section">
                <h3>Market Overview</h3>
                <div className="row mt-4">
                    <div className="col-md-4 p-0">
                        <img src={MarketCard} width="100%" />
                    </div>
                    <div className="col-md-4">
                        <img src={MarketCard} width="100%" />
                    </div>
                    <div className="col-md-4">
                        <img src={MarketCard} width="100%" />
                    </div>
                </div>
            </section>
            <secttion className="second-section">
                <div className="pt-5 pb-5 text-center">
                    <img src={CATCard} width="90%" />
                </div>
                <div className="pt-5 pb-5 text-center">
                    <img src={GetStarted} width="90%" />
                </div>
            </secttion>
            <Footer/>
        </main>
    )
}

export default MarketplacePage;