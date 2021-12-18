import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import ProgressComponent from '../components/ProgressComponent';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import io from 'socket.io-client';

const Result = () => {
    const [data,setData] = useState();

    useEffect(() => {
        const socket = io('https://anssir-voting-api.herokuapp.com/live', {transports: ['websocket', 'polling']});
        socket.on('message', (message) => {
            setData(message)
        })
    }, [])


    return (
        <div>
            <h1 className="font-bold text-2xl">Your Vote is Secure, Your Vote Counts</h1>
            <p className="mt-3 text-gray-500">Ongoing Election</p>

            {
                data ?
                <section className="mt-4">
                {
                    data.map((position)=>(
                        <ProgressComponent key={position._id}
                                            PositionName={position.name} 
                                            candidates={position.candidates}
                                            />
                    ))
                }
                </section>
                :
                <div className='bg-white shadow-md p-2 px-3 mt-5 font-bold text-lg flex flex-col items-center'>
                    <Loader type="Oval" color="#059669" height={100} width={100} />
                </div>
            }
            

        </div>
    )
}

export default Result
