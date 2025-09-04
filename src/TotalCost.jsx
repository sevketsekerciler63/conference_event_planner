import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {
  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading"><h3>Etkinlik için toplam maliyet</h3></p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price"></h2>
          <div className="render_items"></div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
