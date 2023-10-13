import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const DashboardPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <body className={isSidebarOpen ? "toggle-sidebar" : ""}>
            <header
                id="header"
                className="header fixed-top d-flex align-items-center"
            >
                <div className="d-flex align-items-center justify-content-between">
                    <a
                        href="index.html"
                        className="logo d-flex align-items-center"
                    >
                        <img src="/logo.png" alt="" />
                        <span className="d-none d-lg-block">Air Wingman</span>
                    </a>
                    <i
                        className="bi bi-list toggle-sidebar-btn"
                        onClick={() => {
                            setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
                        }}
                    />
                </div>
                <Navbar></Navbar>
            </header>
            <Sidebar active="dashboard"></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Dashboard
                            </li>
                        </ol>
                    </nav>
                </div>

                <div
                    id="carouselExampleInterval"
                    className="carousel slide mb-4"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="dashboard_a.png"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="dashboard_b.png"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="dashboard_c.png"
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <section className="status">
                    <div className="row">
                        <div className="col">
                            <div className="card info-card sales-card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Total User Count
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bi bi-activity" />
                                        </div>
                                        <div className="ps-3">
                                            <h6>20</h6>
                                            <span className="text-success small pt-1 fw-bold">
                                                2
                                            </span>
                                            <span className="text-muted small pt-2 ps-1">
                                                Today
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card info-card revenue-card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Country With High Air Pollution
                                        <span> | This Year</span>
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bi bi-columns-gap" />
                                        </div>
                                        <div className="ps-3">
                                            <h6>India</h6>
                                            <span className="text-success small pt-1 fw-bold">
                                                AQI
                                            </span>
                                            <span className="text-muted small pt-2 ps-1">
                                                189
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="chart"></section>
            </main>
            <Footer></Footer>
        </body>
    );
};

export default DashboardPage;
