// import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Toggle() {

    const { theme, setTheme } = useContext(ThemeContext)

    // const [toggle, setToggle] = useState(true)
    // const toggleClass = "transform translate-x-6";
    // const toggleSwitch = () => {
    //     toggle ? setToggle(false) : setToggle(true);
    // }


    return (
        <>
            <div className="md:-mt-14 mx-8  pt-3 md:pt-0">
                <div className="flex justify-between md:justify-end">
                    <label htmlFor="toggle-switch" className="text-sm font-bold text-medGrey dark:text-white pr-4">Dark Mode</label>
                    <div className="md:mr-24">
                        <input className="cursor-pointer h-6 w-12 rounded-full appearance-none bg-toggle-green checked:bg-toggle-grey transition duration-200 relative" type="checkbox" id="toggle-switch" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
                    </div>
                </div>
            </div>
        </>

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