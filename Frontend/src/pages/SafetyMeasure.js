import React, { useState } from "react";
import Select from "react-select";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SafetyMeasureComponent from "../components/SafetyMeasureComponent";

const rangeOptions = [
    { value: 1, label: "Good" },
    { value: 2, label: "Moderate" },
    { value: 3, label: "Slightly Unhealthy" },
    { value: 4, label: "Unhealthy" },
    { value: 5, label: "Very Unhealthy" },
    { value: 6, label: "Hazardous" },
];

const SafetyMeasurePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedRange, SetSelectedRange] = useState(null);

    const handleOnChange = async (selectedOption) => {
        SetSelectedRange(selectedOption);
    };

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

            <Sidebar active="safety-measure"></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Safety Measure</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Recommendations
                            </li>
                        </ol>
                    </nav>
                </div>

                <div>
                    <Select
                        isClearable={true}
                        placeholder={
                            <span className="bi bi-activity">
                                {"  "}Filter by Range...
                            </span>
                        }
                        options={rangeOptions}
                        onChange={handleOnChange}
                    ></Select>
                    {selectedRange && (
                        <div className="mt-3 pt-3 col">
                            <div>
                                <SafetyMeasureComponent
                                    range={selectedRange.label}
                                ></SafetyMeasureComponent>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer></Footer>
        </body>
    );
};

export default SafetyMeasurePage;
