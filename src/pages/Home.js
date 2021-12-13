import React, { useEffect, useState } from 'react'
import PositionCard from '../components/PositionCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
  
const Home = () => {
  const [data,setData] = useState();
  const [error,setErrorMessage] = useState();
  const [success,setSuccessMessage] = useState();
  const [returnMsg,setReturnMsg] = useState(false);
  let navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const [vicePresidentPositionId,selectedvicePresidentcandidateId] = e.target.VicePresident.value.split('@');
        const [presidentPositionId,SelectedpresidentcandidateId] = e.target.President.value.split('@');

        let dataToPost = {
              id:'242212',
              data:[
                {
                  office: presidentPositionId,
                  candidate:SelectedpresidentcandidateId
                },
                {
                  office: vicePresidentPositionId,
                  candidate:selectedvicePresidentcandidateId
                },
              ]
        }

        console.log(JSON.stringify(dataToPost));

        axios.post('https://anssir-voting-api.herokuapp.com/vote', dataToPost)
        .then(function (response) {
          console.log(response.data);
          setSuccessMessage(response.data);
          console.log('Success message')
        })
        .catch(function (error) { 
          // handle error
          console.log('Error Here');
          console.log(error);
          // setErrorMessage(error.data);
        })

        if (success){
          setErrorMessage(false);
          navigate('/voted');
        }
        else {
          setErrorMessage(true);
        }
    }

    useEffect(() => {
        //get fetch offices array from the dataBase
        axios.get('https://anssir-voting-api.herokuapp.com/offices')
        .then(function (response) {
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
            <p className="mt-3 text-gray-500">You can only vote for one candidate</p>
            {error && <p className='text-red-600'>Error has occured</p>}
            {data ?
              <form onSubmit={handleSubmit}>
                {
                  data.map((post)=>(
                      <PositionCard key={post._id} candidates={post.candidates} position={post.name} positionId={post._id}/>
                  ))
                }
                <div className="mt-8 flex flex-col items-center">
                    <button className='bg-green-600 p-2 px-4 text-white rounded-lg shadow-md hover:bg-green-700'>
                        Submit Vote
                    </button>
                </div>
              </form>
                :
              <div className='bg-white shadow-md p-2 px-3 mt-5 font-bold text-lg text-center flex flex-col items-center'>
                <Loader type="Oval" color="#059669" height={100} width={100} />
              </div>
            }
            
        </div>
    )
}

export default Home
