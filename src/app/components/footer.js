import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin,BsGithub,BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white'>

        <div className="flex justify-center items-center h-16 ">
            <div className="flex space-x-4">
            <a   href=" https://www.facebook.com/pjanardhan7u/" target="_blank" rel="noreferrer" className="text-2xl"><BsFacebook /></a>
            <a  href=" https://www.instagram.com/pjanardhan7u/" target="_blank" rel="noreferrer" className="text-2xl"><BsInstagram /></a>
            <a  href="https://www.linkedin.com/in/pjanardhan7u/" target="_blank" rel="noreferrer" className="text-2xl"><BsLinkedin /></a>
            <a  href="https://github.com/pjanardhan7u" target="_blank" rel="noreferrer" className="text-2xl"><BsGithub /></a>
            <a  href="https://twitter.com/pjanardhan7u" target="_blank" rel="noreferrer" className="text-2xl"><BsTwitter /></a>
            </div>
            
            </div>
            <div>
            <p className=" w-full text-sm text-center">Copyright©2024 Janardhan | All rights reserved</p>
            </div>

    </div>
  )
}

export default Footer