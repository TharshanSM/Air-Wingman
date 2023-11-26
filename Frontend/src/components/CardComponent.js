import React from "react";
import Card from "react-bootstrap/Card";

const CardComponent = ({ country, aqivalue }) => {
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
                <Card.Link href="#">More Details About AQI</Card.Link>
                <Card.Link href="#">Save Timestamp</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
