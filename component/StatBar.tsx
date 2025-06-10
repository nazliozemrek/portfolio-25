import React from 'react'
type StatBarProps={ 
    label:string;
    value:number;
};

const StatBar = ( {label,value}:StatBarProps) => {
  return (
    <div className='mb-3'>
        <div className='flex justify-between text-sm mb-1'>
            <span>{label}</span>
            <span>{value}</span>    
        </div>
        <div className='w-full bg-gray-800 h-2 rounded-full overflow-hidden'>
            <div 
                className='bg-green-400 h-2 rounded-full'
                style={{width:`${value}%`}}
            ></div>
        </div>
    </div>
  )
}

export default StatBar