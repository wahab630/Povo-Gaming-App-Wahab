import React from 'react'
import './brand.css'

const Brand = () => {
  return (
    <>
    <div className="container-fluid brandbg">
     <div className="container">
        <div className="row">
            <div className="col-md-6 text-center">
                <img className='brand-img-one' src="https://povo-site.netlify.app/yahoo.png" alt="no" />
            </div>
            <div className="col-md-6 text-center">
                <img  className='brand-img-two mt-2' src="https://povo-site.netlify.app/benzinga.png" alt="no" />
            </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default Brand