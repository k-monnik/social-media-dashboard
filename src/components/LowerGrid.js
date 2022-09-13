import LowerCard from "./LowerCard";
import { lowerData } from "../data/content";

const LowerGrid = () => {

    return (
        <div className="mx-auto box-border">
            {/* OVERVIEW SECTION */}

            <div className="text-light-300 dark:text-white font-bold text-2xl mx-8 md:mx-32 md:px-12 pt-10 pb-6">
                Overview - Today
            </div>

            {/* BOTTOM GRID  */}

            <div className="grid gap-4 md:gap-x-4 md:gap-y-2 grid-cols-1 mx-8 md:mx-32 md:px-14 md:grid-cols-4 md:grid-rows-2 pb-8 md:pb-12 md:max-w-6xl">
                {lowerData.map((data, index) => (
                    <LowerCard key={index} data={data} />
                ))}

            </div>
        </div>

    );
};

export default LowerGrid;
