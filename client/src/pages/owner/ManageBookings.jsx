import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData } from '../../assets/assets';
import Title from '../../components/owner/Title';

const ManageBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [bookings, setBookings] = useState([]);

  const fetchMyBookings = async () => {
    setBookings(dummyMyBookingsData);
  }

  useEffect( () => {
    fetchMyBookings();
  }, [])


  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title title = 'Manage Bookings' subTitle='Track all custoemr bookings, approve or cancel
      requests, and manage booking statuses'/>

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <td className='p-3 font-medium'>Car</td>
              <td className='p-3 font-medium'>Date range</td>
              <td className='p-3 font-medium'>Total</td>
              <td className='p-3 font-medium'>Status</td>
              <td className='p-3 font-medium'>Actions</td>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className='border-t border-borderColor'>
                <td className='p-3 flex items-center gap-3'>
                  <img src={booking.car.image} alt="" className='h-12 w-16 aspect-square rounded-md object-cover' />
                  <div className='max-md:hidden'>
                    <p>{booking.car.brand} {booking.car.model}</p>
                  </div>
                </td>

                <td className='p-3 max-md:hidden'>
                  {booking.pickupDate.split('T')[0]} to {booking.returnDate.split('T')[0]}
                </td>

                <td className='p-3 max-md:hidden'>
                  {currency}{booking.price}
                </td>

                <td className='p-3 max-md:hidden'>
                  {booking.status}
                </td>

                <td className='p-3 max-md:hidden'>
                  <select className='
          px-3 py-1.5 mt-1 border border-borderColor
          rounded-md outline-none'>
            <option value="Sedan">Cancel</option>
            <option value="Coupe">Confirm</option>
            <option value="SUV">Reject</option>
          </select>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings