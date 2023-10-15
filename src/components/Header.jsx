import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-3 container mx-auto my-5">
            <Link to='/'>Home</Link>
            <Link to='/addcoffee'>Add Coffee</Link>
        </div>
    );
};

export default Header;