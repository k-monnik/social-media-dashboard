// import Test from "./Test";
import { upperData } from '../data/content';
import UpperCard from "./UpperCard";


const UpperGrid = () => {

    return (
        <div className="container mx-auto">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-4 md:max-w-[1110px] md:h-[216px] md:flex md:justify-center md:gap-2">

                {upperData.map((data, index) => (
                    <UpperCard key={index} data={data} />
                ))}
            </div>


        </div >
    );
};

export default UpperGrid;
