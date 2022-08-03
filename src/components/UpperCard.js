
export const UpperCard = ({ data }) => {

    return (
        <ul className={data.border}>
            <li className="flex gap-x-3 justify-center font-bold text-xs py-3">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104A1.102 1.102 0 0 0 18.896 0z" />
                </svg> */}
                {data.icon}
                <div className="pt-1">
                    {data.name}
                </div>

            </li>
            <li className="flex text-6xl font-bold text-light-400 justify-center px-8">
                {data.quantity}
            </li>
            <li className="flex justify-center uppercase tracking-widest font-thin text-xs">
                {data.type}
            </li>
            <li className={data.color}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                    <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
                </svg> */}
                {data.arrow}
                {data.status}
            </li>
        </ul>
    );


};

export default UpperCard;



// export const UpperCard = () => {


//     return <>
//         <div
//             className="p-4 mx-12 border-solid border-t-4 border-social-blue rounded bg-light-200 space-y-4 text-light-300 md:w-[255px] md:h-[216px] md:justify-center">
//             {upperData.map((data, index) => {
//                 return (
//                     <div key={index}>
//                         <div class="flex gap-x-3 justify-center font-bold text-xs">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
//                                 <path fill="#178FF5" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104A1.102 1.102 0 0 0 18.896 0z" />
//                             </svg>
//                             {data.name}
//                         </div>
//                         <div className="flex text-6xl font-bold text-light-400 justify-center">
//                             {data.quantity}
//                         </div>
//                         <div className="flex justify-center uppercase tracking-widest font-thin text-sm">
//                             {data.type}
//                         </div>
//                         <div className="flex gap-x-1 justify-center items-center text-lime font-bold text-xs">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
//                                 <path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z" />
//                             </svg>
//                             {data.status}
//                         </div>
//                     </div>
//                 );
//             })}





//         </div>
//     </>

// };

// export default UpperCard;
