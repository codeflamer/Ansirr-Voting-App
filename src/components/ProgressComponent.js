import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressComponent = ({PositionName,candidates}) => {
    return (
        <div className="bg-white shadow-md p-4  mt-5 rounded-md">
            <p className="font-bold text-md flex items-center lg:text-lg">
                <span className="block w-4 h-4 bg-purple-800 rounded-full mr-3"></span>
                {PositionName}
            </p>

            {
                candidates.map((candidate)=>(
                    <div key={candidate.id} className="flex flex-col md:flex-row md:items-center mt-4 md:px-5 ">
                        <div className="p-2 justify-center w-full md:w-40 flex flex-col items-center cursor-pointer m-0 pb-4 mr-4 md:mr-10">      
                            <img 
                                    className='rounded-full h-10 w-10 '
                                    src='https://bit.ly/3pFQRP1'
                                    width={200}
                                    height={200}
                                    objectfit='contain'
                                    alt=''
                                    loading='lazy'
                            />
                            <p className='text-sm mt-3 lg:text-md'>{candidate.name}</p>
                        </div>
                        <div className='md:flex-1 mb-3'>
                            <ProgressBar completed={`${candidate.votes.length}`} bgColor='rgb(5 150 105)' maxCompleted='40'/>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ProgressComponent
