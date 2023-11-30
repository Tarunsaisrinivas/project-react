// BasicExample.js
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const cardData = [
  {
    id: 1,
    imageSrc: "https://picsum.photos/200/200",
    title: "Title 1",
    description: "Demo 1",
  },
  {
    id: 2,
    imageSrc: "https://picsum.photos/200/201",
    title: "Title 2",
    description: "Demo 2",
  },
  // Add more card data as needed
];

function BasicExample() {
  return (
    <Row xs={2} md={3} className="g-4">
      {cardData.map((card) => (
        <Col key={card.id}>
          <Card style={{ width: "200px", margin: "10px", border: "1px solid #ddd", borderRadius: "10px",background:'#fca311',fontSize:'18px' }}>
            <Card.Img variant="top" src={card.imageSrc} alt="" />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BasicExample;
