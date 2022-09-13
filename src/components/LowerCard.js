import React from 'react';


const LowerCard = ({ data }) => {
    return <>
        <div className="mx-auto py-6 px-6 border-solid border-1 rounded-md bg-light-200 dark:bg-dark-200 md:justify-items-center text-light-300 h-32 w-80 md:w-64">
            <div className="flex justify-between">
                <div className="font-bold text-sm dark:text-dark-100">
                    {data.type}
                </div>

                {data.icon}
            </div>
            <div className="pt-6 flex items-end justify-between">
                <div className="font-bold text-3xl text-light-400 dark:text-white">
                    {data.quantity}
                </div>
                <div className={data.color}>

                    {data.arrow}
                    {data.status}
                </div>
            </div>

        </div>
    </>
};

export default LowerCard;
