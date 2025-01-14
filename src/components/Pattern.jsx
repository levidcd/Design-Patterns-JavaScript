import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/languages/hljs/javascript';
import styleLight from '../styles/hljs/hljs.light';
import styleDark from '../styles/hljs/hljs.dark';
import { patterns } from '../static/patterns';
import { restart } from '../actions/restart';
import { getMode } from '../selectors';
import { withTranslation } from 'react-i18next';
import i18n from '../i18n';


SyntaxHighlighter.registerLanguage('javascript', js);

const StyledPattern = styled.div`
  color: ${props => props.theme.text};

  h2,
  h3 {
    color: ${props => props.theme.header};
    margin-top: 2.5rem;
  }
`;

const SubHeader = styled.span`
  background-color: ${props => props.theme.titleBackground};
  color: ${props => props.theme.header};
  display: block;
  margin-bottom: 8px;
  padding: 4px;
  text-transform: uppercase;
`;

const Type = styled.span`
  text-transform: capitalize;
`;

const StyledLink = styled(Link)`
  border-bottom: 1px solid ${props => props.theme.CRIMSON};
  color: ${props => props.theme.CRIMSON};
  display: inline-block;
  margin-top: 2rem;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid transparent;
  }
`;

const createProxy = (pattern) => new Proxy(pattern, {
  get(target, key, receiver) {
    let localeValue = target[key + '_' + i18n.language];
    let value = target[key];
    return localeValue ? localeValue : value;
  }
});

class Pattern extends React.Component {
  componentDidMount() {
    this.props.reset();
  }

  pattern

  render() {
    const {
      params: { id }
    } = this.props.match;

    if (!this.pattern) {
      const p = patterns.filter(item => item.id === id)[0];
      this.pattern = createProxy(p);
    }

    const pattern = this.pattern;

    const style = this.props.mode === 'dark' ? styleDark : styleLight;

    const { t } = this.props;

    return (
      <StyledPattern>
        <StyledLink to="/patterns">&larr; {t('Back to Patterns List')}</StyledLink>
        {pattern && (
          <React.Fragment>
            <h2>{t(pattern.name)}</h2>
            <p>
              <SubHeader>{t('Type')}</SubHeader>
              <Type>{t(pattern.type)}{t('pattern')}</Type>
            </p>
            <p>
              <SubHeader>{t('Definition')}</SubHeader>
              {pattern.definition}
            </p>
            {pattern.when && (
              <p>
                <SubHeader>{t('Use When')}</SubHeader>
                &hellip;{pattern.when}.
              </p>
            )}

            <h3>ES6</h3>
            <SyntaxHighlighter language="javascript" style={style}>
              {pattern.codeES6}
            </SyntaxHighlighter>

            <h3>ES5</h3>
            <SyntaxHighlighter language="javascript" style={style}>
              {pattern.codeES5}
            </SyntaxHighlighter>
          </React.Fragment>
        )}
      </StyledPattern>
    );
  }
}

Pattern.propTypes = {
  match: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired
};

export default withTranslation()(connect(
  state => ({
    mode: getMode(state)
  }),
  {
    reset: () => restart()
  }
)(Pattern));
