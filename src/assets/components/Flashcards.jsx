import React from 'react'

export default function Flashcards() {
    
  return (
    <div className="flash-cards block">
                <div className="flash-card">
                  <h3 className="flash-card-title">Leaf Spot</h3>
                  <p className="flash-card-text">Leaf spot is a plant disease causing discolored spots on leaves, often fungal or bacterial. 
                    It spreads via wind and rain, thriving in damp conditions. Severe cases weaken plants and cause leaf drop. 
                    Management includes removing infected leaves and improving air circulation fungicides may be needed for severe infections.</p>
                </div>
                <div className="flash-card block">
                  <h3 className="flash-card-title">Powdery Mildew</h3>
                  <p className="flash-card-text">Powdery mildew is a fungal disease characterized by white, powdery spots on leaves and stems. 
                    It spreads easily via wind, especially in humid conditions, hindering plant growth and weakening its overall health. 
                    Management involves improving air circulation, removing infected plant parts, and, for severe cases, applying fungicides.</p>
                </div>
                <div className="flash-card block">
                  <h3 className="flash-card-title">Bacterial Blight</h3>
                  <p className="flash-card-text">Bacterial blight is a plant disease caused by bacterial infection, characterized by dark, 
                    water-soaked spots on leaves, often surrounded by yellow halos.
                    It spreads through rain, contaminated tools, and infected seeds, leading to leaf drop, reduced yield,and potentially plant death.
                    Management involves removing infected plant parts, improving soil drainage, and, in severe cases, applying copper-based bactericides 
                    (use with caution).</p>
                </div>
    </div>
            
  )
}
