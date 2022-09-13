import Toggle from "./Toggle";

const Header = () => {
    return (
        <div>
            <div className="md:w-full h-60 md:h-64 bg-light-100 dark:bg-dark-300">
                <div className="md:px-12 pt-10 mx-8 border-b border-solid border-medGrey md:border-none">
                    <h1 className="font-bold text-2xl md:text-3xl dark:text-white">Social Media Dashboard</h1>
                    <p className="pt-0.5 pb-4 text-sm text-solidGrey dark:text-dark-100 font-semibold ">
                        Total Followers: 23,004
                    </p>

                </div>
                <div>
                    <Toggle />
                </div>

            </div>
        </div>
    )
}

export default Header
