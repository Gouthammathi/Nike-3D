import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './footer/Footer';
import Routers from '../router/Routers';
import styled from 'styled-components';

const Layout = () => {
  return (
    <StyledLayout>
      <Router>
        <Fragment>
          <Header />
          <div className="content">
            <Routers />
          </div>
          <Footer />
        </Fragment>
      </Router>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the layout takes full height */
  
  .content {
    flex: 1; /* Allow content to grow and take available space */
  }
`;

export default Layout;