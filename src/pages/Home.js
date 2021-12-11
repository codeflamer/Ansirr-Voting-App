import React from 'react'
import PositionCard from '../components/PositionCard';
import { useNavigate } from 'react-router-dom';

const data =[
    {
      id: 11,
      name: 'President',
      candidates:[
        {
          id: 12,
          name: 'Taiwo Tolulope',
        },
        {
          id: 13,
          name: 'Mr Anonymous',
        },
        {
          id: 14,
          name: 'Mr Nobody',
        },
      ]
    },
    {
      id: 111,
      name: 'Secretary',
      candidates:[
        {
          id: 112,
          name: 'Williams',
        },
        {
          id: 113,
          name: 'Mr BullDozer',
        },
        {
          id: 114,
          name: 'Mr Everybody',
        },
      ]
    }
  ]
  

const Home = () => {
  let navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const [secrataryPositionId,selectedSecratarycandidateId] = e.target.Secretary.value.split('@');
        const [presidentPositionId,SelectedpresidentcandidateId] = e.target.President.value.split('@');

        // navigate('/result');
        const dataToPost = {
              id:'12345678',
              data:[
                {
                  office: presidentPositionId,
                  candidate:SelectedpresidentcandidateId
                },
                {
                  office: secrataryPositionId,
                  candidate:selectedSecratarycandidateId
                },
              ]
        }
        console.log(dataToPost);
        navigate('/result');
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">Your Vote is Secure, Your Vote Counts</h1>
            <p className="mt-3 text-gray-500">You can only vote for one candidate</p>

            <form onSubmit={handleSubmit}>
                {
                  data.map((post)=>(
                      <PositionCard key={post.id} candidates={post.candidates} position={post.name} positionId={post.id}/>
                  ))
                }
                <div className="mt-8 flex flex-col items-center">
                    <button className='bg-green-600 p-2 px-4 text-white rounded-lg shadow-md hover:bg-green-700'>
                        Submit Vote
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Home
