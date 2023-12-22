import React from 'react'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  Seo,
} from 'gatsby-theme-portfolio-minimal'
import HorizontalLine from '../components/HorizontalLine/horizontal-line'

export default function IndexPage() {
  return (
    <>
      <Seo title="Seth Delorme" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <HorizontalLine />
        <AboutSection sectionId="about" heading="WHO IS THIS GUY ANYWAY?" />
        <ContactSection sectionId="contact" />
      </Page>
    </>
  )
}
