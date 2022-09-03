// import { useState } from 'react';

function Toggle() {

    // const [toggle, setToggle] = useState(true)
    // const toggleClass = "transform translate-x-6";
    // const toggleSwitch = () => {
    //     toggle ? setToggle(false) : setToggle(true);
    // }


    return (
        <div className="md:-mt-14 ml-4">
            <div className="flex md:justify-end">
                <label htmlFor="toggle-switch" className="text-sm font-bold text-medGrey dark:text-white pr-4">Dark Mode</label>
                <div className="md:mr-24">
                    <input className="cursor-pointer h-6 w-12 rounded-full appearance-none bg-toggle-green checked:bg-toggle-grey transition duration-200 relative" type="checkbox" id="toggle-switch" />
                </div>
            </div>
        </div>
        // <div
        //     className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-toggle-grey rounded-full p-1 cursor-pointer"
        //     onClick={toggleSwitch}
        // >

        //     {/* Toggle */}
        //     <div>
        //         {/* {toggle ?  } */}
        //     </div>


        // </div>

    );
}

export default Toggle;


/* <div
className={"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out"
    + (toggle ? null : toggleClass)}>
</div> */