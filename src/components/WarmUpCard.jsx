// WarmUpCard.jsx
import React from "react";
import { Card } from "react-bootstrap";

// category and exercises are props that are being passed to WarmUpGenerator
function WarmUpCard({ category, exercises }) {
    return (
      <div className="warmUpCard">
        <Card>
          <div className="warmUpCardTitle">
            <Card.Title>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Card.Title>
          </div>
          <div className="warmUpCardText">
            <Card.Text>
              {exercises.map((exercise, index) => (
                <li key={index}>{exercise.exercise}</li>
              ))}
            </Card.Text>
          </div>
        </Card>
      </div>
    );
}

export default WarmUpCard;