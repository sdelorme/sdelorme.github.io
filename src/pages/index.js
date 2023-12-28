import React from 'react'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
  Animation,
  ProjectsSection,
} from 'gatsby-theme-portfolio-minimal'

export default function IndexPage() {
  return (
    <>
      <Seo title="Seth Delorme" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Who is this guy anyway?" />
        <InterestsSection sectionId="Interests" heading="Current Stack" />
        <ProjectsSection
          sectionId="projects"
          heading="The Aforementioned Things and Stuff (a.k.a. Things I've Coded)"
        />
        <Animation type="waving-hand" duration={2500} iterationCount={1}>
          <ContactSection sectionId="contact" />
        </Animation>
      </Page>
    </>
  )
}
