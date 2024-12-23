// src/components/AnimatedText.js

import styled from 'styled-components';
import React from 'react';



const StyledText = styled.h2`
  color: #FFD700;
  animation: slideInLeft 5s ease-in-out;
  font-size: 50px;
  font-weight: bold;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 100; }
  }
    @keyframes slideInLeft {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
`;


const AnimatedText = () => {
    
   return (
   
     <StyledText>LYAN Furniture And Interior Design</StyledText>
  )
};

export default AnimatedText;