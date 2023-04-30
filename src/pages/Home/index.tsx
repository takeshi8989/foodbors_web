import React from 'react'
import { Host } from '../../types/host'

const Home = () => {
  return (
    <div>
        <div>
            {hosts.map((host) => (
                <div key={host.username}>
                    <a href={`/host/${host}`}>{host.username}</a>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Home



const hosts: Host[] = [
    // create a list of hosts
    { username: 'johndoe', email: 'john@gmail.com', phone_number: '1234567890', address: '123 Main St', bio: 'I am a host'},
    // create another host
    { username: 'janedoe', email: 'jane@gmail.com', phone_number: '2345678810', address: '234 Sub St', bio: 'I am a host'},
    { username: 'takeshi', email: 'jane@gmail.com', phone_number: '2345678810', address: '234 Sub St', bio: 'I am a host'},

]
    