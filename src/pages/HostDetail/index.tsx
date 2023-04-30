import React, { useEffect, useState } from 'react'
import { Host } from '../../types/host'
import { useParams } from 'react-router-dom'
import { hosts } from '../../data/hosts'

const HostDetail = () => {
  const { id } = useParams()
  const [host, setHost] = useState<Host | null>(null)

  useEffect(() => {
    if (!id) return
    const host = hosts.find((host) => host.id === parseInt(id))
    setHost(host || null)
  }, [id])

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10">
      <div className="md:flex m-3 mb-6">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            alt="Food"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{host?.username}</div>
          <a
            href={`mailto:${host?.email}`}
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {host?.email}
          </a>
          <p className="mt-2 text-gray-500">{host?.phone_number}</p>
          <p className="mt-2 text-gray-500">{host?.address}</p>
          <p className="mt-2 text-gray-500">{host?.bio}</p>
        </div>
      </div>
      <div className="md:flex m-3">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            alt="Food"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Food 1</div>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt metus a ligula convallis, eget
            commodo tellus dictum. Nulla facilisi. Sed convallis lorem id mi bibendum imperdiet.
          </p>
        </div>
      </div>
      <div className="md:flex m-3">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://assets.bonappetit.com/photos/6282c9214844aec731451f28/3:2/w_4073,h_2715,c_limit/0622-Summer-Goddess-Chicken-Salad.jpg"
            alt="Food"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Food 2</div>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt metus a ligula convallis, eget
            commodo tellus dictum. Nulla facilisi. Sed convallis lorem id mi bibendum imperdiet.
          </p>
        </div>
      </div>
      <div className="md:flex m-3">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="https://images.everydayhealth.com/images/diet-nutrition/34da4c4e-82c3-47d7-953d-121945eada1e00-giveitup-unhealthyfood.jpg?sfvrsn=a31d8d32_0"
            alt="Food"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Food 3</div>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt metus a ligula convallis, eget
            commodo tellus dictum. Nulla facilisi. Sed convallis lorem id mi bibendum imperdiet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HostDetail
