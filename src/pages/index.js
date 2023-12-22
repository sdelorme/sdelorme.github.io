import React from 'react'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
  Animation,
} from 'gatsby-theme-portfolio-minimal'
import HorizontalLine from '../components/HorizontalLine/horizontal-line'

export default function IndexPage() {
  return (
    <>
      <Seo title="Seth Delorme" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <HorizontalLine />
        <InterestsSection sectionId="Interests" />
        <HorizontalLine />
        <AboutSection sectionId="about" heading="WHO IS THIS GUY ANYWAY?" />
        <HorizontalLine />
        <Animation type="waving-hand" duration={2500} iterationCount={1}>
          <ContactSection sectionId="contact" />
        </Animation>
      </Page>
    </>
  )
}
