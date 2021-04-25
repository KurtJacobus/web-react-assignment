import {Link} from 'react-router-dom';
import "../index.css";

const Navbar = () => {
    return ( <nav className="navbar">
        <h1><Link to='/'>Cafeen</Link></h1>
        <div className="links">
            <Link to='/create'style = {{
                color : "white",
                backgroundColor:"#f1356d",
                borderRadius:"8px"
            }}>Create recipe</Link>
            <Link to="/brewers" style = {{
                color : "white",
                backgroundColor:"#f1356d",
                borderRadius:"8px"
            }}>Legend Brewers</Link>
        </div>
    </nav>
    )
};
export default Navbar;