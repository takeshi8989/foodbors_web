import React from 'react'
import { Host } from '../../types/host'
import HostCard from '../../components/Card/hostCard'

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



const hosts: Host[] = [
    { id: 1, username: 'johndoe', email: 'john@gmail.com', phone_number: '1234567890', address: '123 Main St', bio: 'I am a host'},
    { id: 2, username: 'janedoe', email: 'jane@gmail.com', phone_number: '2345678810', address: '234 Sub St', bio: 'I am a host'},
    { id: 3, username: 'takeshi', email: 'jane@gmail.com', phone_number: '2345678810', address: '234 Sub St', bio: 'I am a host'},
    { id: 4, username: 'hello', email: 'john@gmail.com', phone_number: '1234567890', address: '123 Main St', bio: 'I am a host'},
    { id: 5, username: 'youko', email: 'jane@gmail.com', phone_number: '2345678810', address: '234 Sub St', bio: 'I am a host'},
    { id: 6, username: 'jongn', email: 'jane@gmail.com', phone_number: '2345678810', address: '234 Sub St', bio: 'I am a host'},

]
    