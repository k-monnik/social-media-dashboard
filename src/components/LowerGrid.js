import LowerCard from "./LowerCard";
import { lowerData } from "../data/content";
// import fb from "../../src/images/icon-facebook.svg";


const LowerGrid = () => {



    return (
        <div className="container mx-auto md:px-24">
            {/* OVERVIEW SECTION */}

            <div className="text-light-300 font-bold text-2xl mx-8 md:mx-0 pt-10 pb-6">
                Overview - Today
            </div>





            {/* BOTTOM GRID  */}

            <div className="grid gap-4 grid-cols-1 mx-8 md:grid-cols-4 md:grid-rows-2 pb-8 md:pb-12">
                {lowerData.map((data, index) => (
                    <LowerCard key={index} data={data} />
                ))}

            </div>
        </div>

    );
};

export default LowerGrid;



// const content = [

//     {
//         title: 'Page Views',
//         icon: 'fb',
//         value: '87',
//         status: 'icon 3%',
//     },
//     {
//         title: 'Likes',
//         icon: 'fb',
//         value: '52',
//         status: 'icon 2%',
//     },
//     {
//         title: 'Likes',
//         icon: 'ig',
//         value: '5462',
//         status: 'icon 2257%',
//     },
//     {
//         title: 'Profile Views',
//         icon: 'ig',
//         value: '52k',
//         status: 'icon 1375%',
//     },
//     {
//         title: 'Retweets',
//         icon: 'tw',
//         value: '117',
//         status: 'icon 303%',
//     },
//     {
//         title: 'Likes',
//         icon: 'tw',
//         value: '507',
//         status: 'icon 553%',
//     },
//     {
//         title: 'Likes',
//         icon: 'yt',
//         value: '107',
//         status: 'icon 19%',
//     },
//     {
//         title: 'Total Views',
//         icon: 'yt',
//         value: '1407',
//         status: 'icon 12%',
//     },
// ];