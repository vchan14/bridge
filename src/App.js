import React from 'react';
// --- Landing Page from Material UI 
import withRoot from './landing_page/modules/withRoot';
// --- Post bootstrap -----
import ProductCategories from './landing_page/modules/views/ProductCategories';
import ProductSmokingHero from './landing_page/modules/views/ProductSmokingHero';
import AppFooter from './landing_page/modules/views/AppFooter';
import ProductHero from './landing_page/modules/views/ProductHero';
import ProductValues from './landing_page/modules/views/ProductValues';
import ProductHowItWorks from './landing_page/modules/views/ProductHowItWorks';
import ProductCTA from './landing_page/modules/views/ProductCTA';
import AppAppBar from './landing_page/modules/views/AppAppBar';


function App() {
  return (
    <div className="App">
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />      
    </div>
  );
}

export default withRoot(App);
