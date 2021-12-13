import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div>
            <h1 className="text-3xl md:text-5xl text-center text-green-700">Voting Successful!</h1>
            <img className='mt-4 mx-auto rounded-lg' 
                src="https://bit.ly/3DTdlRM"
                alt='success'
                objectfit='contain'
                loading='lazy'
            />
            <div className="mt-3 text-center">
                <p className="text-gray-700 md:text-xl">You have successfully voted</p>
                <Link to="/result" className=" text-white bg-green-600 text-md px-2 py-2 rounded-md inline-block hover:bg-green-700 mt-3">Check result</Link>
            </div>
        </div>
    )
}

export default Success
