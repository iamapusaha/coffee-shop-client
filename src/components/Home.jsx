import { useLoaderData } from "react-router-dom";
import SingleCoffee from "./SingleCoffee";


const Home = () => {
    const loaddedCoffee = useLoaderData();
    console.log(loaddedCoffee);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-5 my-5">
                {
                    loaddedCoffee.map(coffee => <SingleCoffee
                        key={coffee._id}
                        coffee={coffee}
                    ></SingleCoffee>)
                }
            </div>
        </div>
    );
};

export default Home;