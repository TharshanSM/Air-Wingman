import React from "react";
import Card from "react-bootstrap/Card";
import jsPDF from "jspdf";
import axios from "axios";

const CardComponent = ({ country, aqivalue, latitude, longitude }) => {
    const get_data = (aqi) => {
        if (aqi <= 50) {
            return "The current Air Quality Index (AQI) for the region falls in the 'Good' range, which is a cause for celebration. In essence, this signifies that the air quality is excellent, and the atmosphere is pristine. This is a green light for everyone to partake in outdoor activities without any health concerns.";
        } else if (aqi > 50 && aqi <= 100) {
            return "The current Air Quality Index (AQI) for the region is placing it in the 'Moderate' range. This means that the air quality is generally acceptable, and most people can breathe without concerns. However, it's always a good practice to stay informed about the local air quality. While the air is clean for the majority, individuals who are unusually sensitive to air pollution, such as those with respiratory issues, the elderly, or young children, might consider reducing outdoor activities that require heavy exertion.";
        } else if (aqi > 100 && aqi <= 150) {
            return "The current Air Quality Index (AQI) for the region has entered the 'Unhealthy for Sensitive Groups' range. While the air quality is still acceptable for the general population, individuals with respiratory or heart conditions, the elderly, and young children may experience health effects. They should limit prolonged outdoor exertion.";
        } else if (aqi > 150 && aqi <= 200) {
            return "The current Air Quality Index (AQI) for the region has reached the 'Unhealthy' range. This means the air quality is notably degraded, and everyone may begin to experience health effects. It's advisable for the entire population to reduce prolonged outdoor activities.";
        } else if (aqi > 200 && aqi <= 300) {
            return "The current Air Quality Index (AQI) for the region falls into the 'Very Unhealthy' range. This signifies a severe deterioration in air quality, and health alert notices are issued. Everyone should avoid outdoor activities, and those with respiratory or heart conditions may face even more serious health effects.";
        } else if (aqi > 300 && aqi <= 500) {
            return "The current Air Quality Index (AQI) for the region is classified as 'Hazardous,' range. This level indicates that the air quality is extremely poor and poses health risks to the entire population. Outdoor activities should be avoided at all costs, and residents should stay indoors to minimize health hazards. ";
        } else {
            return "Invalid AQI value. Please provide a valid AQI value within the range 0 - 500.";
        }
    };

    const get_range = (aqi) => {
        if (aqi <= 50) {
            return "Good";
        } else if (aqi > 50 && aqi <= 100) {
            return "Moderate";
        } else if (aqi > 100 && aqi <= 150) {
            return "Unhealthy";
        } else if (aqi > 150 && aqi <= 200) {
            return "Unhealthy";
        } else if (aqi > 200 && aqi <= 300) {
            return "Very Unhealthy";
        } else if (aqi > 300 && aqi <= 500) {
            return "Hazardous";
        } else {
            return "Invalid AQI value";
        }
    };

    const generateForecastPDF = async () => {
        const pdf = new jsPDF();

        pdf.setFont("helvetica");
        pdf.setFontSize(18);
        pdf.setTextColor(128, 128, 128);

        try {
            const Response = await fetch(
                `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=515feb20d83f656ee0a2bfa9016b585e`
            );
            const Data = await Response.json();
            const List = Data.list.slice(0, 10);

            pdf.addImage(
                "https://res.cloudinary.com/dvnxc9nsf/image/upload/v1697129342/NC%20Apps/Blue_Simple_LinkedIn_Banner_x9bngs.png",
                "PNG",
                -100,
                0
            );

            pdf.text(
                `Air Quality Forecast Information For Country - ${country}`,
                20,
                120
            );

            pdf.setFontSize(14);

            for (const [i, forecast] of List.entries()) {
                const date = new Date(forecast.dt * 1000);
                const formattedDateTime = date.toLocaleString();
                const { so2, no2, o3, co, pm2_5, pm10 } = forecast.components;

                const response = await axios.post(
                    "http://localhost:3000/aqi/predict",
                    {
                        SO2: so2,
                        NO2: no2,
                        O3: o3,
                        CO: co,
                        PM25: pm2_5,
                        PM10: pm10,
                    }
                );

                const aqiQualityData = response.data;
                const aqi = Math.round(aqiQualityData.predictions[0][0] / 10);

                pdf.text(
                    `Date and Time - ${formattedDateTime} | AQI Value -  ${aqi} | Range - ${get_range(
                        aqi
                    )}`,
                    10,
                    140 + i * 10
                );
            }

            pdf.save("Forecast.pdf");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/dvnxc9nsf/image/upload/v1697129342/NC%20Apps/Blue_Simple_LinkedIn_Banner_x9bngs.png"
                />

                <Card.Title>
                    Air Quality Status Report For {country}{" "}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Air Quality Index Value {aqivalue}
                </Card.Subtitle>
                <Card.Text>{get_data(aqivalue)}</Card.Text>
                <Card.Link href="#" onClick={generateForecastPDF}>
                    Forecast
                </Card.Link>
                <Card.Link href="#">More Details About AQI</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
