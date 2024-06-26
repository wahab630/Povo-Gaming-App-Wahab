
import Faq from "react-faq-component";
import './faqs.css'

const data = {
  rows: [
    {
      title: "HOW TRANSACTIONS CAN BE PERFORMED?",
      content: `Transactions in Povo can be made with a variety of digital funds. This include your crypto currencies, NFT tokens. You can purchase Povo tokens with fiat currency or swap with other crypto assets, as well.`,
    },
    {
      title: "HOW CROSS CHAIN FUNCTIONALITIES WORK?",
      content:
        "It works by allowing exchange of different cryptocurrencies between different pairs. It basically works as a currency exchange to facilitate your transfer/swap of crypto assets.",
    },
    {
      title: "WHAT IS MULTIVERSE USE CASE IN BLOCKCHAIN GAME?",
      content: `Multiverses can be used in gaming as an advanced feature to enter in parallel universes to explore new area and levels within the game. `,
    },
    {
      title: "IS THERE ANY LIMIT IN FUND WITHDRAWAL?",
      content: `Generally, there is not limit implied on withdrawal of your funds with Povo. You can withdrawal at any time and for any amount.`,
    },
    {
      title: "I HAVE RECEIVED POVO CARD, WHAT TO DO NEXT?",
      content: `Now that you have your Povo card, you can unlock NFT’s exclusive farms. You can mint NFTs or liquidate your Povo cards at any time or swap them with other crypto assets. `,
    },
    {
      title: "What do I need to do to join Povo testnet?",
      content: <ul>
        <li>Compatible Wallet</li>
        <li>Povo extension</li>
        <li>Required some BNB/Eth or TEX for tranction</li>
      </ul> ,
    },
    {
      
      title: "NFTs copyrights",
      content: <ul>
        <li>We have partnered with various artists</li>
        <li>We are digitalizing gaming assets like hammer, shovel, boxes etc, with unique characteristics</li>
        <li>These assets are generated by users and licensed under POVO NFTs</li>
        <li>User can sell these NFTs (gaming assets) in market place.</li>
      </ul> ,
    }
  ]
};

const styles = {
  bgColor: 'transparent',
  // titleTextColor: "blue",
  rowTitleColor: "white",
  rowContentColor: 'white',
  arrowColor: "white",
  //  titleTextSize: '48px',
  //  rowContentTextSize: '20px',
  //  rowContentPaddingBottom: '10px',
  //  rowContentMarginBottom: '100px',
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Faqs = () => {
  return (
    <>
      <div className="container-fluid live-bg ">
        <div className="container ">
          <div className="row section">
            <div className="col-lg-12 pb-5">
              <h1 className="text-center fw-bold ">FAQ</h1>
            </div>
            <div className="col-lg-8 m-auto">
              <Faq data={data} styles={styles} config={config} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
