import React from 'react'
import Image from 'next/image'
import html_logo from '../../assets/html_logo.svg'

const HtmlSection = ({setOpenModal}) => {
  return (
    <div className='flex flex-row border m-2  rounded-lg p-3 items-center border-slate-200 gap-[10px]'>
        <Image src={html_logo} alt="html_logo" width={65} height={65} />
        <div className='flex flex-col'>
            <div className='text-md font-semibold'>
                HyperText Markup Language
            </div>
            <div className='text-sm'>
                Questions: 08 | Duration: 15 mins | Submitted on 5th June 2021
            </div>
        </div>
        <div>
            <button className='px-5 py-2 border bg-blue-950 text-white text-sm font-semibold rounded-md' onClick={() => setOpenModal(true)}>Update</button>
        </div>
    </div>
  )
}

export default HtmlSection