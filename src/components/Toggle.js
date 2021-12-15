import { useState } from 'react';

function Toggle() {

    const [toggle, setToggle] = useState(true)
    const toggleClass = "transform translate-x-6";

    return (
        // HEADER
        <div>
            <h1 className="font-bold text-2xl">Social Media Dashboard</h1>
            <div className="divide-y divide-solid divide-light-300 md:divide-none">
                <p className="pt-0.5 pb-4 text-sm text-light-300 font-semibold">
                    Total Followers: 23,004
                </p>
                <div className="py-4 text-sm text-light-300 font-semibold flex justify-between">
                    Dark Mode


                    {/* Toggle Container */}
                    <div
                        className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-toggle-grey rounded-full p-1 cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }}

                    >

                        {/* Toggle */}
                        <div
                            className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out"
                                + (toggle ? null : toggleClass)}>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Toggle;
