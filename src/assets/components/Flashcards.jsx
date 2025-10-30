import React, { useState } from "react";

export default function Flashcards() {
  const cards = [
    {
      title: "Leaf Spot",
      text: `Leaf spot is a plant disease causing discolored spots on leaves, often fungal or bacterial. 
      It spreads via wind and rain, thriving in damp conditions. Severe cases weaken plants and cause leaf drop. 
      Management includes removing infected leaves and improving air circulation fungicides may be needed for severe infections.`
    },
    {
      title: "Powdery Mildew",
      text: `Powdery mildew is a fungal disease characterized by white, powdery spots on leaves and stems. 
      It spreads easily via wind, especially in humid conditions, hindering plant growth and weakening its overall health. 
      Management involves improving air circulation, removing infected plant parts, and, for severe cases, applying fungicides.`
    },
    {
      title: "Bacterial Blight",
      text: `Bacterial blight is a plant disease caused by bacterial infection, characterized by dark, 
      water-soaked spots on leaves, often surrounded by yellow halos.
      It spreads through rain, contaminated tools, and infected seeds, leading to leaf drop, reduced yield,and potentially plant death.
      Management involves removing infected plant parts, improving soil drainage, and, in severe cases, applying copper-based bactericides 
      (use with caution).`
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flash-card-container">
      <div className="carousel">
        {cards.map((card, index) => {
          let className = "flash-card";

          if (index === currentIndex) className += " center";
          else if (index === (currentIndex + 1) % cards.length) className += " right";
          else if (index === (currentIndex - 1 + cards.length) % cards.length) className += " left";
          else className += " hidden";

          return (
            <div key={index} className={className}>
              <div className="arrow arrow-left" onClick={prevCard}>
                &#8592;
              </div>

              <div className="flash-card-content">
                <h3 className="flash-card-title">{card.title}</h3>
                <p className="flash-card-text">{card.text}</p>
              </div>

              <div className="arrow arrow-right" onClick={nextCard}>
                &#8594;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
