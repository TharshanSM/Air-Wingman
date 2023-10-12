import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const AirQualityPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [countryOptions, setCountryOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [airData, setAirData] = useState(null);
    const [aqiValue, setAqiValue] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all"
            );
            const data = response.data;

            const countryOptions = data.map((country) => ({
                value: country.cca3,
                label: country.name.common,
                latitude: country.latlng[0],
                longitude: country.latlng[1],
            }));

            setCountryOptions(countryOptions);
        };

        fetchCountries();
    }, []);

    const handleGetAQIQuality = async (so2, no2, o3, co, pm25, pm10) => {
        const response = await axios.post("http://localhost:3000/aqi/predict", {
            SO2: so2,
            NO2: no2,
            O3: o3,
            CO: co,
            PM25: pm25,
            PM10: pm10,
        });

        const aqiQualityData = response.data;
        setAqiValue(aqiQualityData.predictions[0][0]);
    };

    const handleOnChange = async (selectedOption) => {
        setSelectedCountry(selectedOption);

        const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${selectedOption.latitude}&lon=${selectedOption.longitude}&appid=515feb20d83f656ee0a2bfa9016b585e`
        );
        const data = response.data;

        const so2 = data.list[0].components.so2;
        const no2 = data.list[0].components.no2;
        const o3 = data.list[0].components.o3;
        const co = data.list[0].components.co;
        const pm25 = data.list[0].components.pm2_5;
        const pm10 = data.list[0].components.pm10;

        setAirData({
            so2,
            no2,
            o3,
            co,
            pm25,
            pm10,
        });

        await handleGetAQIQuality(so2, no2, o3, co, pm25, pm10);
    };

    console.log(airData);
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
            <Sidebar active="airquality"></Sidebar>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Air Quality</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Air Quality
                            </li>
                        </ol>
                    </nav>
                </div>
                <div>
                    <div className="d-flex">
                        <div className="pt-3 ps-1 col">
                            <Select
                                isClearable={true}
                                placeholder={
                                    <span className="bi bi-compass-fill">
                                        {"  "}Select Country.....
                                    </span>
                                }
                                options={countryOptions}
                                onChange={handleOnChange}
                            ></Select>
                        </div>
                    </div>
                </div>
                {selectedCountry && (
                    <div className="card card-body mt-3 pt-3 col">
                        <div>
                            <p>Selected Country - {selectedCountry.label}</p>
                            <p>Country Latitute - {selectedCountry.latitude}</p>
                            <p>
                                Country Longtitute - {selectedCountry.longitude}
                            </p>
                            <p className="aqi-value">
                                Air Quality Index - {aqiValue}
                            </p>
                        </div>
                    </div>
                )}
            </main>
            <Footer></Footer>
        </body>
    );
};

export default AirQualityPage;
