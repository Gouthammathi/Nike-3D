import React from "react";
import styled from "styled-components";
import shoe1 from "../images/shoe1.png";
import shoe2 from "../images/shoe2.png";
import shoe3 from "../images/shoe3.png";

const Card = ({ image, title, colors, price }) => {
  return (
    <StyledCard>
      <div className="card">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{colors}</p>
          <div className="price">£ {price}</div>
        </div>
      </div>
    </StyledCard>
  );
};

const App = () => {
  const cardsData = [
    { image: shoe1, title: "NIKE AIR FORCE", colors: "3 COLORS", price: "230.00" },
    { image: shoe2, title: "NIKE DUNK LOW", colors: "4 COLORS", price: "200.00" },
    { image: shoe3, title: "NIKE AIR MAX", colors: "2 COLORS", price: "180.00" },
  ];

  return (
    <PageWrapper>
      <CardContainer>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            colors={card.colors}
            price={card.price}
          />
        ))}
      </CardContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f4f9;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StyledCard = styled.div`
  .card {
    width: 200px;
    height: 320px;
    background: linear-gradient(180deg, #fdfbfb, #f4f4f9);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  .image {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .image img {
    width: 120px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .card:hover .image img {
    transform: scale(1.1);
  }

  .details {
    margin-top: auto;
  }

  .details h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #181818;
  }

  .details p {
    font-size: 14px;
    color: #7b7b7b;
    margin-bottom: 10px;
  }

  .price {
    font-size: 18px;
    font-weight: bold;
    color: #e63946;
  }
`;

export default App;
