// import Test from "./Test";
import { upperData } from '../data/content';
import UpperCard from "./UpperCard";


const UpperGrid = () => {

    return (
        <div className="container mx-auto">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-4 max-w-xs mx-auto md:max-w-6xl md:h-56 md:flex md:justify-center md:gap-7 -mt-12 md:-mt-24 md:px-24">

                {upperData.map((data, index) => (
                    <UpperCard key={index} data={data} />
                ))}
            </div>


        </div >
    );
};

export default UpperGrid;
