import UpperCard from "./UpperCard";


const UpperGrid = () => {

    return (
        <div className="container mx-auto">
            <div className="grid gap-10 grid-cols-1 md:grid-cols-4 md:w-[1110px] md:h-[216px] md:flex md:justify-center md:space-x-2">

                <UpperCard
                />
                {/* {content.map(({ name, value, type, status }, index) => (
                    <div key={index}>

                    </div>
                ))} */}

            </div>



        </div>
    );
};

export default UpperGrid;
