
export const UpperCard = ({ data }) => {

    return (
        <ul className={data.border}>
            <li className="flex gap-x-3 justify-center font-bold text-xs py-3">
                {data.icon}
                <div className="pt-1 dark:text-dark-100">
                    {data.name}
                </div>

            </li>
            <li className="flex text-6xl font-bold text-light-400 dark:text-white justify-center px-8">
                {data.quantity}
            </li>
            <li className="flex justify-center uppercase tracking-widest font-thin text-xs dark:text-dark-100">
                {data.type}
            </li>
            <li className={data.color}>
                {data.arrow}
                {data.status}
            </li>
        </ul>
    );
};

export default UpperCard;

