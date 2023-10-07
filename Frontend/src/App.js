import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AirQualityPage from "./pages/AirQualityPage";
import RecommendationPage from "./pages/RecommendationPage";
import FeedbackPage from "./pages/FeedbackPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/airquality" element={<AirQualityPage />} />
                <Route
                    path="/recommendation"
                    element={<RecommendationPage />}
                />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default App;
