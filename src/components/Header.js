// import Toggle from "./Toggle";

const Header = () => {
    return (
        <header className="header">
            <div className="w-[375px] h-[235px] md:w-[1440px] md:h-[244px] bg-light-100">
                <h1 className="font-bold text-2xl">Social Media Dashboard</h1>
                <div className="divide-y divide-solid divide-light-300 md:divide-none">
                    <p className="pt-0.5 pb-4 text-sm text-light-300 font-semibold ">
                        Total Followers: 23,004
                    </p>
                    <div className="py-4 text-sm text-light-300 font-semibold flex justify-between md:justify-end md:gap-x-2 md:items-center md:align-top">
                        Dark Mode

                        {/* <Toggle /> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
