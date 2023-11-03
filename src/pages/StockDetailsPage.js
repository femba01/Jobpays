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
import StockDetailCard from '../images/stockdetailscard1.svg';
import Frame1 from '../images/frame1.svg';
import Frame2 from '../images/frame2.svg';
import Frame3 from '../images/frame3.svg';
import '../styles/stockdetails.css';
import Footer from "../components/footer";


const StockDetailsPage = () => {

    return (
        <main>
            <Header />
            <section className="stock-section">
                <div><span>Home   Stock Details (Nestle)</span></div>
                <div className="my-4"><img src={StockDetailCard} width="100%" /></div>
            </section>
            <section className="second-section">
                <div className="row mt-4">
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4 p-4">
                        <img src={Frame1} width="90%" className="mb-3" />
                        <img src={Frame2} width="90%" className="mb-3" />
                        <img src={Frame3} width="90%" className="mb-3" />
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

export default StockDetailsPage;