import React from 'react'
import HostCard from '../../components/Card/hostCard'
import { hosts } from '../../data/hosts'

const Home : () => JSX.Element  = () => {
  return (
    <div className='w-screen'>
        <div className='flex mt-10 w-3/4 mx-auto justify-center flex-wrap'>
            {hosts.map((host) => (
                <div key={host.id} className='m-5'>
                <HostCard  host={host} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home