import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import ProgressComponent from '../components/ProgressComponent';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Result = () => {
    const [data,setData] = useState();

    useEffect(() => {
        // console.log('Helllo World');
        axios.get('https://anssir-voting-api.herokuapp.com/vote/results')
        .then(function (response) {
        //   console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) { 
          // handle error
          console.log(error);
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
