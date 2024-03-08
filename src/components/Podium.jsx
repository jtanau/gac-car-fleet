import React from 'react';
import '../styles/Podium.css';
import logo_guillemotCorp from '../assets/logo_guillemotCorp.png'
import logo_hercules from '../assets/logo_hercules.png'
import logo_thrustmaster from '../assets/logo_thrustmaster.png'

function Podium() {
  return (
    <div className="podium-container">
      <div className="podium" id="first">
        <span>1</span>
        <div className="winner">
          <img src={logo_guillemotCorp} alt="First place" />
        </div>
        <div className="trophy">🏆</div>
      </div>
      <div className="podium" id="second">
        <span>2</span>
        <div className="winner">
          <img src={logo_hercules} alt="Second place" />
        </div>
      </div>
      <div className="podium" id="third">
        <span>3</span>
        <div className="winner">
          <img src={logo_thrustmaster} alt="Third place" />
        </div>
      </div>
    </div>
  );
}

export default Podium;
