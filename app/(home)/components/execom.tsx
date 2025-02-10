import Image from 'next/image'
import React from 'react'

const Execom = () => {
  return (
    <div className="bg-white py-5" id='execom'>
      <div className='screen sm:px-10 px-5'>
        <h4 className='text-6xl text-black'><span className='font-semibold text-primary'>IEDC</span> EXECOM</h4>
      </div>
      <div className="screen sm:px-10 px-5 pt-5 grid md:grid-cols-4 grid-cols-2">
        <Image src={'/CCO2024.png'} alt='' width={500} height={700} />
        <Image src={'/CEO2024.png'} alt='' width={500} height={700} />
        <Image src={'/CFO2024.png'} alt='' width={500} height={700} />
        <Image src={'/CMO2024.png'} alt='' width={500} height={700} />
        <Image src={'/COO2024.png'} alt='' width={500} height={700} />
        <Image src={'/CSO2024.png'} alt='' width={500} height={700} />
        <Image src={'/CTO2024.png'} alt='' width={500} height={700} />
        <Image src={'/CVO2024.png'} alt='' width={500} height={700} />
      </div>
    </div>
  )
}

export default Execom