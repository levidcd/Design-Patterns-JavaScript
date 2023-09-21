import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const StyledAbout = styled.div`
  color: ${props => props.theme.text};

  a {
    border-bottom: 1px solid ${props => props.theme.CRIMSON};
    color: ${props => props.theme.CRIMSON};
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
`;

const Header = styled.h3`
  color: ${props => props.theme.header};
  margin-top: 2rem;
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <StyledAbout>
      <Header>{t('The Game')}</Header>
      <p>
        {t('Design Patterns')} - {t('Design Patterns Intro')}
      </p>

      <Header>{t('References')}</Header>
      <p>
        {t('Felipe Beline References')}
        <cite>
          <a href="//github.com/fbeline/Design-Patterns-JS" target="_blank">
            awesome code compilation
          </a>
        </cite>
        .
      </p>
      <p>
        {t('Addy Osmani References')}
        <cite>
          <a href="//addyosmani.com/resources/essentialjsdesignpatterns/book/" target="_blank">
            Learning JavaScript Design Patterns
          </a>
        </cite>
        .
      </p>
    </StyledAbout>
  );
};

export default About;
