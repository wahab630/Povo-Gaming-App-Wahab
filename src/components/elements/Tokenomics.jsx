import React from 'react'
import './tokenomics.css'

const Tokenomics = () => {
  return (
    <>
    <div className="token">
        <div className="container token-p">
            <h1 className="text-center fw-bold mb-5"> Povo  <span className='color'>   Tokenomics</span> </h1>
            <div className="row">
                <div className="col-md-6">
                <h5 className='color-one'><strong >TOTAL SUPPLY: </strong>10,000,000</h5>
                <h2 className='color-two mb-4'>Token <strong className='color-one'>Distribution</strong> (Gamenomics)</h2>
                <ul className='liststyle'>
                    <li className='fw-bold mb-3'>
                        <span className="tab-one mb-2">  Presale</span>30%
                    </li>
                    <li className='fw-bold mb-3'>
                        <span className="tab-two ">  Staking pool</span>23%
                    </li>
                     <li className='fw-bold mb-3'>
                        <span className="tab-three ">  Liquidity Pool</span>20%
                    </li>
                    <li className='fw-bold mb-3'>
                        <span className="tab-four "> Advisors</span>10%
                    </li>
                    <li className='fw-bold mb-3'>
                        <span className="tab-five "> Airdop</span>7%
                    </li>
                    <li className='fw-bold mb-3'>
                        <span className="tab-six ">Gaming</span>7%
                    </li>
                    <li className='fw-bold mb-3'>
                        <span className="tab-seven ">Team</span>3%
                    </li>
                    
                </ul>
                </div>
                <div className="col-md-6">
                    <img className='token-img' src="https://povo-site.netlify.app/static/media/chart.bae4ea49.png" alt="no" />
                </div>
 
            </div>
        </div>
    </div>
    </>
  )
}

export default Tokenomics