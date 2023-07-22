import React from 'react'

const SocialMedia = () => {
  return (
    <div className='w-full flex justify-center gap-8 pb-12'>
        <i onClick={()=>{window.open("https://www.linkedin.com/in/subhajit-kundu-043403207", "_blank")}} className="fa-brands fa-linkedin text-5xl transition duration-300 hover:scale-110" style={{color: "#033da0"}}></i>
        <i onClick={()=>{window.open("https://github.com/subhajit033", "_blank")}} className="fa-brands fa-github text-5xl transition duration-300 hover:scale-110" style={{color: "#f5f7f9"}}></i>
    </div>
  )
}

export default SocialMedia