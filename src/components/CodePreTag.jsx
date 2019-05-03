import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const CodePreTag = ({ children, ...restProps }) => {
  const syntaxHighlighterEl = useRef(null);

  useEffect(() => {
    if (syntaxHighlighterEl.current && syntaxHighlighterEl.current.scroll) {
      syntaxHighlighterEl.current.scroll(0, 0);
    }
  }, [children]);

  return <pre {...restProps} ref={syntaxHighlighterEl}>{children}</pre>;
};

CodePreTag.propTypes = {
  children: PropTypes.node
};

export default CodePreTag;
