
import PropTypes from 'prop-types';

const SingleCoffee = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee;
    return (
        <div className='rounded-lg'>
            <div className="flex justify-between items-center min-w-96 bg-base-100 shadow-xl p-7">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="btn-group btn-group-vertical">
                    <button className="btn btn-active">Details</button>
                    <button className="btn">update</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

SingleCoffee.propTypes = {
    coffee: PropTypes.object
};

export default SingleCoffee;