import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './styles.css';

function HeaderBackground() {
  const [openAd, setOpenAd] = useState(true);

  if (!openAd) return null;

  return (
    !!openAd && (
      <div className="header-background-container">
        <span
          className="header-background-icon"
          onClick={() => setOpenAd(false)}
          role="presentation"
        >
          <AiOutlineCloseCircle size={24} color="#fff" />
        </span>
        <h1 className="header-background-ad">
          Não deixe de ver nossas promoções.
        </h1>
      </div>
    )
  );
}

export default HeaderBackground;
