import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
            <Link to="/"><i className="fas fa-code"></i> The Count Of Money</Link>
        </h1>
        <ul>
            { "logged in" === false ? //for testing only
                <Fragment>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </Fragment>
            :
                <Fragment>
                    <li><Link to="/articles">Articles</Link></li>
                    <li className="step2"><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li className="step3" ><Link to="/">Logout</Link></li>
                </Fragment>
            }
        </ul>
    </nav>
    )
}
export default Navbar;
