import React from 'react'

const PositionCard = ({candidates, position,positionId}) => {
    return (
        <div id={positionId} className="bg-white shadow-md p-2 px-3 mt-5">
            <label htmlFor={positionId} className="font-bold text-md flex items-center lg:text-lg">
                <span className="block w-4 h-4 bg-purple-800 rounded-full mr-3"></span>
                {position}
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
              {
                  candidates.map((candidate)=>(
                    <div key={candidate.id} className="p-2 flex flex-col items-center cursor-pointer hover:shadow-md m-0 pb-4">
                        <p className='text-sm mb-4 lg:text-md'>{candidate.name}</p>
                        <img 
                                className='rounded-full h-20 w-20'
                                src='https://bit.ly/3pFQRP1'
                                width={200}
                                height={200}
                                objectfit='contain'
                                alt=''
                                loading='lazy'
                        />
                        <div className='flex items-center space-x-3 mt-4'>
                            <input type="radio" 
                                    required
                                    id={positionId}
                                    name={position} 
                                    value={positionId + '@' + candidate.id} 
                                    className="appearance-none w-5 h-5 cursor-pointer checked:border-8 border-green-600 border-2 rounded-full"/>
                            <p className='text-sm lg:text-md'>Choose</p>
                        </div>
                    </div>
                  ))
              }
                
            </div>

        </div>
    )
}

export default PositionCard
