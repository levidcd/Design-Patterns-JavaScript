import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TitleContainer = styled.div`
  padding: 0.75rem 0 1rem;
  border-radius: 4px;
  background: ${props => props.theme.titleBackground};
  margin: 1rem 0 0;
  text-align: center;
  width: 100%;
`;

const Heading = styled.h1`
  font-family: 'Karla', sans-serif;
  font-size: 1.75rem;
  color: ${props => props.theme.title};
  margin: 0;
`;

const SubHeading = styled.h2`
  font: 400 0.875rem 'Karla', sans-serif;
  color: ${props => props.theme.link};
  margin: 0.75rem 0 0;
`;

export const Title = () => {
  const { t } = useTranslation();
  return (
    <TitleContainer>
      <Heading>{t('Design Patterns Game')}</Heading>
      <SubHeading>{t('"Gang of Four" patterns in JavaScript')}</SubHeading>
    </TitleContainer>
  );
};

export default Title;
