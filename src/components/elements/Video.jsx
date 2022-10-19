import React from 'react'
import './video.css'

const Video = () => {
  return (
    <>
    <div className="container-fluid videobg">
    <div class="ratio ratio-16x9">
    <iframe class="embed-responsive-item" src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4" allowfullscreen ></iframe>
    </div>
    </div>
    </>
  )
}

export default Video