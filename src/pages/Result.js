import React from 'react'
import ProgressComponent from '../components/ProgressComponent'

const Result = () => {

    const data =[
        {
            id: 11,
            name: 'President',
            candidates:[
                {
                    votes:['12345678','89101112','','','',''],
                    id: 12,
                    name: 'Taiwo Tolulope'
                },
                {
                    votes:['13141516','17181920','','','','','','','','','','','','','','','','','','','',''],
                    id: 13,
                    name: 'Mr Anonymous',
                },
                {
                    votes:['2122232425','26272829','','','','','','','',''],
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
                    votes:['12345678','13141516','','','','','','','','','','','',''],
                    id: 112,
                    name: 'Williams',
                },
                {
                    votes:['89101112','2122232425','','','','','','','',''],
                    id: 113,
                    name: 'Mr BullDozer',
                },
                {
                    votes:['17181920','26272829','','','','','','','','','','','','','','','',''],
                    id: 114,
                    name: 'Mr Everybody',
                },       
            ]
        }
    ]

    return (
        <div>
            <h1 className="font-bold text-2xl">Your Vote is Secure, Your Vote Counts</h1>
            <p className="mt-3 text-gray-500">Ongoing Election</p>

            <section className="mt-4">
                {
                    data.map((position)=>(
                        <ProgressComponent key={position.id}
                                            PositionName={position.name} 
                                            candidates={position.candidates}
                                            />
                    ))
                }
                
            </section>

        </div>
    )
}

export default Result
