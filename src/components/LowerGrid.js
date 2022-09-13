import LowerCard from "./LowerCard";
import { lowerData } from "../data/content";

const LowerGrid = () => {

    return (
        <div className="container mx-auto md:max-w-6xl md:mx-40">
            {/* OVERVIEW SECTION */}

            <div className="text-light-300 dark:text-white font-bold text-2xl mx-8 md:mx-0 md:px-6 pt-10 pb-6">
                Overview - Today
            </div>

            {/* BOTTOM GRID  */}

            <div className="grid gap-4 md:gap-7 grid-cols-1 mx-8  md:grid-cols-4 md:grid-rows-2 md:mx-4 md:flex-row md:justify-center pb-8 md:pb-12 ">
                {lowerData.map((data, index) => (
                    <LowerCard key={index} data={data} />
                ))}

            </div>
        </div>

    );
};

export default LowerGrid;
