import React from 'react';

const LowerCard = () => {
    return <>
        <div className="py-6 px-8 mx-8 border-solid border-1 rounded-md bg-light-200 md:justify-items-center text-light-300">
            <div className="flex justify-between">
                <div className="font-bold text-sm">
                    Page Views
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path fill="#178FF5"
                        d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104A1.102 1.102 0 0 0 18.896 0z" />
                </svg>
            </div>
            <div className="pt-6 flex items-end justify-between">
                <div className="font-bold text-3xl text-light-400">
                    87
                </div>
                <div className="flex items-center gap-x-1 text-lime font-bold text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                        <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                    </svg>
                    3%
                </div>
            </div>

        </div>
    </>
};

export default LowerCard;