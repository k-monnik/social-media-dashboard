// import React from 'react';



export const Test = ({ data }) => {

    return (
        <ul className='border-2 border-black'>
            <li className="flex gap-x-3 justify-center font-bold text-xs">
                {data.name}
            </li>
            <li className="flex text-6xl font-bold text-light-400 justify-center">
                {data.quantity}
            </li>
            <li className="flex justify-center uppercase tracking-widest font-thin text-sm">
                {data.type}
            </li>
            <li className="flex gap-x-1 justify-center items-center text-lime font-bold text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                    <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                </svg>
                {data.status}
            </li>
        </ul>
    );


};

export default Test;
