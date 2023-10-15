import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleCoffee = ({ coffee }) => {
    const MySwal = withReactContent(Swal)
    const { _id, name, chef, taste, photo } = coffee;
    const handleDeleteCoffee = id => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        MySwal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })

    }
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
                    <Link to={`/update/${_id}`}><button className="btn">update</button></Link>
                    <button onClick={() => handleDeleteCoffee(_id)} className="btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

SingleCoffee.propTypes = {
    coffee: PropTypes.object
};

export default SingleCoffee;