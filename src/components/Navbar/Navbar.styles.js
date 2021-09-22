// Import the necessary libraries.
import styled from 'styled-components';

// Export the Wrapper component nav style.

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
`;

// Export the AlertContent component div style.
export const AlertContent = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
  align-items: center;
  //margin-left: 50px;
  
  .dalerts {
    //position: absolute;
    //top: 43.02px;
    font-size: 12px;
    color: #ffffff;
    text-decoration: none;
  }
  .nav-text {
    color: #ffffff;
  }
  
  .container img {
    position: absolute;
    top: 18px;
  }
  .container {
    width: 50px;
  }
  
  .container p {
    margin: 15px 30px 0 0;
  }
  .bell-icon {
    
  }
`;

// Export the content component div style.
export const Content = styled.div`
  width: 128px;
  height: 30px;
  background: #1F2231;
  border-radius: 10px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  p {
    font-size: 12px;
    //line-height: 18px;
    //font-style: normal;
    color: #ffffff;
    
  }
  
  span {
    width: 18px;
    height: 18px;
    background: linear-gradient(161.09deg, #FF6868 -125.67%, rgba(5, 0, 255, 0) 204.92%);
    border-radius: 50%;
  }
`;

// Export the line component div style.
export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: linear-gradient(89.98deg, #256EFF 0.02%, #F84F60 102.46%);
  top: 75px;
`;

// Export the Vector Component img style.
export const VectorImg = styled.img`
  
`;