import Toggle from "./Toggle";

const Header = () => {
    return (
        <div>
            <div className="md:w-full h-60 md:h-64 bg-light-100 dark:bg-dark-300">
                <div className="md:px-12 pt-10 mx-4">
                    <h1 className="font-bold text-2xl md:text-3xl dark:text-white">Social Media Dashboard</h1>
                    <p className="pt-0.5 pb-4 text-sm text-solidGrey dark:text-dark-100 font-semibold ">
                        Total Followers: 23,004
                    </p>

                </div>
                <div className="divide-y divide-solid divide-dark-300 md:divide-none"></div>
                <div>
                    <Toggle />
                </div>

                {/* <div className="text-sm text-light-300 dark:text-white font-semibold flex justify-between  md:justify-end md:gap-x-2 md:pr-24">
                    Dark Mode

                    <Toggle />
                </div> */}
            </div>
        </div>
    )
}

export default Header
