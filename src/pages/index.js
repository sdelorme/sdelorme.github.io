import React from 'react'
import {
  ContactSection,
  HeroSection,
  Page,
  Seo,
} from 'gatsby-theme-portfolio-minimal'

export default function IndexPage() {
  return (
    <>
      <Seo title="Seth Delorme" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ContactSection sectionId="contact" />
      </Page>
    </>
  )
}
