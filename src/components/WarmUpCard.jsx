import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function WarmUpCard({ category, exercises }) {
    return (
      <Row className="justify-content-center">
        {/* Adjust the column sizes for different screen sizes */}
        <Col xs={10} sm={6} md={4} className="mb-4">
          <div className="warmUpCard">
            <Card>
              <div className="warmUpCardTitle">
                <Card.Title>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Card.Title>
              </div>
              <div className="warmUpCardText">
                <Card.Text>
                  <ul>
                    {exercises.map((exercise, index) => (
                      <li key={index}>{exercise.exercise}</li>
                    ))}
                  </ul>
                </Card.Text>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    );
}

export default WarmUpCard;