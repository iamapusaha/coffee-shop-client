import { useLoaderData } from "react-router-dom";
import SingleCoffee from "./SingleCoffee";
import { useState } from "react";


const Home = () => {
    const loaddedCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(loaddedCoffee)
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 gap-5 my-5">
                {
                    coffees.map(coffee => <SingleCoffee
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></SingleCoffee>)
                }
            </div>
        </div>
    );
};

export default Home;