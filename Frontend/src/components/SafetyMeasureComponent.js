import React from "react";
import Card from "react-bootstrap/Card";

function SafetyMeasureComponent({ range }) {
    const get_data = (range) => {
        if (range === "Good") {
            return "When the air quality is good, it means the air around us is clean and safe to breathe. In this situation, the Air Quality Index falls within a specific range, showing that there are low levels of pollutants like SO2, NO2, O3, CO, PM10, and PM2.5. To keep the air this way, everyone can help by doing simple things. Use eco-friendly practices, like recycling and saving energy, to reduce pollution. Choose sustainable transportation options when possible, like walking, biking, or using public transport. Planting trees and participating in community efforts to keep the environment clean also make a big difference. By doing these things, we all work together to make sure the air stays clean and healthy for everyone.";
        } else if (range === "Moderate") {
            return "In the moderate range of air quality, the Air Quality Index suggests that the concentration of pollutants like SO2, NO2, O3, CO, PM10, and PM2.5 is moderate and may pose a slight concern for sensitive individuals. While the air is generally acceptable, it is advisable for people with respiratory conditions or other health issues to be cautious. To prevent air quality from worsening, individuals can contribute by using energy-efficient appliances, reducing vehicle emissions by carpooling, and avoiding unnecessary idling. Additionally, practicing responsible burning of fuels and adhering to local environmental regulations can help maintain a moderate air quality level. By being mindful of these preventive measures, we collectively contribute to sustaining a healthier atmosphere for everyone.";
        } else if (range === "Slightly Unhealthy") {
            return "In the slightly unhealthy range of air quality, the Air Quality Index indicates a moderate level of pollutants such as SO2, NO2, O3, CO, PM10, and PM2.5. This may pose some health concerns, particularly for individuals with respiratory conditions or sensitivities. To mitigate the impact, it is advisable to reduce outdoor activities, especially for vulnerable groups like children and the elderly. Preventive measures also include using air purifiers indoors, staying informed about air quality forecasts, and wearing masks in areas with higher pollution levels. Additionally, contributing to air quality improvement by minimizing the use of personal vehicles, supporting clean energy initiatives, and following local emission control measures can collectively help bring the air quality back to a healthier state.";
        } else if (range === "Unhealthy") {
            return "In the unhealthy range of air quality, the Air Quality Index indicates elevated levels of pollutants, including SO2, NO2, O3, CO, PM10, and PM2.5, posing potential health risks for everyone. During these conditions, it is crucial to take preventive measures to minimize exposure. Individuals are advised to limit outdoor activities, especially for sensitive groups like children, the elderly, and those with pre-existing health conditions. Indoors, using air purifiers and keeping windows and doors closed can help reduce exposure to outdoor pollutants. Wearing masks designed to filter out particulate matter can provide an additional layer of protection. To address the root causes, supporting policies for emission reduction, advocating for clean energy practices, and reducing personal carbon footprint become essential actions. By collectively implementing these preventive measures, we contribute to creating a healthier and safer environment.";
        } else if (range === "Very Unhealthy") {
            return "In the very unhealthy range of air quality, the Air Quality Index signals a significant elevation in pollutants like SO2, NO2, O3, CO, PM10, and PM2.5, posing serious health risks for everyone. During such conditions, it is imperative to take immediate and stringent preventive measures. Individuals are strongly advised to minimize outdoor activities, especially for vulnerable groups like children, the elderly, and those with respiratory or cardiovascular conditions. Indoors, using high-efficiency particulate air filters and creating a clean indoor environment becomes essential. Wearing masks designed to filter out fine particles can provide additional protection when outdoors. Contributing to the improvement of air quality by supporting stringent emission control policies, advocating for sustainable practices, and reducing personal contributions to pollution are critical steps. By collectively implementing these preventive measures, we actively work towards restoring a healthier and safer air quality level.";
        } else {
            return "In the hazardous range of air quality, the Air Quality Index indicates an extremely high concentration of pollutants, including SO2, NO2, O3, CO, PM10, and PM2.5, presenting severe health risks for everyone. Exposure during these conditions can lead to immediate and long-term health issues. It is imperative to take immediate and comprehensive preventive measures. Individuals should avoid all outdoor activities, keep windows and doors closed, and use air purifiers equipped with HEPA filters indoors. Wearing N95 masks, which are designed to filter out very fine particles, is crucial for reducing exposure when outdoor movement is unavoidable. Active measures to support policies and practices that reduce emissions, promote clean energy, and address the sources of pollution become crucial. By collectively implementing stringent preventive measures, we contribute to mitigating the immediate health risks and work towards creating a safer and healthier environment.";
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/dvnxc9nsf/image/upload/v1700759241/b3_ka51n6.png"
                />

                <Card.Title>Saferty Measure</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {range} Range
                </Card.Subtitle>
                <Card.Text>{get_data(range)}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SafetyMeasureComponent;
