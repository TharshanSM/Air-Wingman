import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const FeedbackPage = () => {
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
            <Sidebar active="feedback"></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Feedbacks</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Feedbacks
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="card card-body mt-3 pt-3">
                                <form>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Name
                                        </label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleDataList"
                                                placeholder="Type Your Name Here..."
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Subject
                                        </label>
                                        <div className="col-sm-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleDataList"
                                                placeholder="Type Your Subject Here..."
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="inputText"
                                            className="col-sm-4 col-form-label"
                                        >
                                            Feedback
                                        </label>
                                        <div className="col-sm-8">
                                            <textarea
                                                className="form-control"
                                                placeholder="Type Your Feedback Here..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <span className="col-sm-4 col-form-label"></span>
                                        <div className="col-sm-auto">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                id="submitbutton"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </body>
    );
};

export default FeedbackPage;
