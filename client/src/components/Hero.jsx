import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

    const [location, setLocation] = useState('')

  return (
    <div className='h-screen flex flex-col items-center 
    justify-center gap-14 bg-light test-center'>

        <h1 className='text-4xl md:text-5xl font-semibold'>Luxury Cars for Rent</h1>
        
        <form className='flex flex-col md:flex-row items-start md:items-center
        justify-between p-6 rounded-lg md:roounded-full w-full max-w-80 md:max-w-200
        bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.3)]'>
            <div className='flex flex-col md:flex-row items-start md:items-center
            gap-10 min-md:ml-8'>
                {/* This part is for the pickup location*/}
                <div className='flex flex-col items-start gap-2'>
                    <select required value={location} onChange={(e) =>
                        setLocation(e.target.value)
                    }>
                        <option value="">Pickup Location</option>
                        {cityList.map((city) => 
                        <option key={city} value={city}>{city}</option>) }
                    </select>
                    <p className='px-1 text-sm text-gray-500'>{ !location ? 'Please select location' : location}</p>
                </div>
                {/* This part is for pickup date*/}
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="pickup-date">Pick-up date</label>
                    <input type="date" id='pick-up date' min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' />
                </div>
                {/* This part is for Return date*/}
                <div className='flex flex-col items-start gap-2'>
                    <label htmlFor="return-date">Return date</label>
                    <input type="date" id='return date' className='text-sm text-gray-500' />
                </div>

                <button className='flex items-center justify-center gap-1 px-9'>
                    <img src={assets.search_icon} alt="search"  className='brightness-400'/>
                    Search
                </button>

            </div>
        </form>

        <img src={assets.main_car} alt="car" className='max-h-74'/>
    </div>
  )
}

export default Hero