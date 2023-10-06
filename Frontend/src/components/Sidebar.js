import { Link } from "react-router-dom";

function Sidebar({ active }) {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link
                        to="/dashboard"
                        className={`nav-link ${
                            active === "dashboard" ? "" : "collapsed"
                        }`}
                    >
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        to="/airquality"
                        className={`nav-link ${
                            active === "airquality" ? "" : "collapsed"
                        }`}
                    >
                        <i className="bi bi-grid" />
                        <span>Air Quality</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        to="/recommendation"
                        className={`nav-link ${
                            active === "recommendation" ? "" : "collapsed"
                        }`}
                    >
                        <i className="bi bi-grid" />
                        <span>Recommendations</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        to="/feedback"
                        className={`nav-link ${
                            active === "feedback" ? "" : "collapsed"
                        }`}
                    >
                        <i className="bi bi-grid" />
                        <span>Feedbacks</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        to="/profile"
                        className={`nav-link ${
                            active === "profile" ? "" : "collapsed"
                        }`}
                    >
                        <i className="bi bi-grid" />
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
