import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const User = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser)

    const handleDeleteUser = id => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log("data successfully  daleted ");
                    const remainingUser = users.filter(user => user._id !== id)
                    setUsers(remainingUser)
                }
            })
    }
    return (
        <div className="overflow-x-auto mx-auto container">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>CreatedId</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, idx) => <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td onClick={() => handleDeleteUser(user._id)} className="btn">X</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;