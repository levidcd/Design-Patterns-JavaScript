import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { patterns } from '../static/patterns';
import { useTranslation } from 'react-i18next';

const StyledPatterns = styled.div`
  color: ${props => props.theme.text};

  a {
    border-bottom: 1px solid transparent;
    color: ${props => props.theme.CRIMSON};
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.CRIMSON};
    }
  }

  h2,
  h3 {
    color: ${props => props.theme.header};
    margin-top: 2.5rem;
  }

  h3 {
    border-bottom: 1px solid ${props => props.theme.text};
    color: ${props => props.theme.header};
    padding-bottom: 1rem;
  }
`;

const PatternsList = () => {
  const { t } = useTranslation();

  const lister = patternType => (
    <ul>
      {patterns.map(({ id, name, type }) => {
        if (type === patternType) {
          return (
            <li key={id}>
              <Link to={`/patterns/${id}`}>{t(name)}</Link>
            </li>
          );
        }
      })}
    </ul>
  );


  return (
    <StyledPatterns>
      <h2>{t('Design Patterns')}</h2>

      <p>
        {t('Design Patterns Desc')}
      </p>

      <h3>{t('creational')}{t('Design Patterns')}</h3>
      <p>
        {t('creational_desc')}
      </p>
      {lister('creational')}

      <h3>{t('structural')}{t('Design Patterns')}</h3>
      <p>
        {t('structural_desc')}
      </p>
      {lister('structural')}

      <h3>{t('behavioral')}{t('Design Patterns')}</h3>
      <p>
        {t('behavioral_desc')}
      </p>
      {lister('behavioral')}
    </StyledPatterns>
  );
};

export default PatternsList;
