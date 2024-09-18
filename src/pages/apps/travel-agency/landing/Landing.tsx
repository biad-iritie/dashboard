import React, { useEffect } from 'react';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import TopNav from './TopNav';
import HeroHeader from './HeroHeader';
import SeasonOfTour from './SeasonOfTour';
import BestPlaces from './BestPlaces';
import BestHotel from './BestHotel';
import Gallery from './Gallery';
import LatestPosts from './LatestPosts';
import LatestPhotos from './LatestPhotos';
import GetApp from './GetApp';
import Footer from './Footer';
import NavbarMain from 'components/navbars/travel-landing/NavbarMain';
import TravelCta from 'components/cta/TravelCta';

const Landing = () => {
  useSettingsMountEffect({
    disableNavigationType: true,
    disableHorizontalNavbarAppearance: true,
    disableVerticalNavbarAppearance: true,
    disableHorizontalNavbarShape: true
  });

  useEffect(() => {
    document.body.classList.add('bg-body-emphasis');
    document.body.setAttribute(
      'style',
      document.body.getAttribute('style')
        ? document.body.getAttribute('style') +
            '; --phoenix-scroll-margin-top: 1.2rem'
        : '--phoenix-scroll-margin-top: 1.2rem'
    );
    return () => {
      document.body.classList.remove('bg-body-emphasis');
      document.body.removeAttribute('style');
    };
  }, []);

  return (
    <>
      <TopNav />
      <NavbarMain />
      <HeroHeader />
      <SeasonOfTour />
      <BestPlaces />
      <BestHotel />
      <Gallery />
      <LatestPosts />
      <TravelCta />
      <LatestPhotos />
      <GetApp />
      <Footer />
    </>
  );
};

export default Landing;
