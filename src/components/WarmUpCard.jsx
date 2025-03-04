// WarmUpCard.jsx
import React from "react";
import { Card } from "react-bootstrap";

// category and exercises are props that are being passed to WarmUpGenerator
function WarmUpCard({ category, exercises }) {
    return (
        <Card>
            <Card.Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Card.Title>
            <Card.Text>
                    {exercises.map((exercise, index) => (
                        <li key={index}>{exercise.exercise}</li>
                    ))}
            </Card.Text>
        </Card>
    );
}

export default WarmUpCard;