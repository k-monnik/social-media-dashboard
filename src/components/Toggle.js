// import { useState } from 'react';

function Toggle() {

    // const [toggle, setToggle] = useState(true)
    // const toggleClass = "transform translate-x-6";
    // const toggleSwitch = () => {
    //     toggle ? setToggle(false) : setToggle(true);
    // }


    return (
        <div>
            <div className="flex justify-end">
                <label htmlFor="toggle-switch" className="text-sm font-bold text-medGrey pr-12">Dark Mode</label>
                <div className="mr-24">
                    <input className="cursor-pointer h-6 w-12 rounded-full appearance-none bg-toggle-grey checked:bg-toggle-green" type="checkbox" id="toggle-switch" />
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