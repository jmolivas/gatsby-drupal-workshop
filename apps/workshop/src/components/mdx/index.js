import React from 'react';

import Code from './code';

export default {
  pre: props => {
    if (props.children.props.name === 'code') {
      // mdxTag has children prop, which is source code
      // mdxTagProps.props is the props to pass to `code`, including meta props
      const mdxTagProps = props.children.props;
      let lang = `markup`;
      let title = ``;
      if (mdxTagProps.props.className) {
        const match = mdxTagProps.props.className.match(/language-([a-z]*)/);
        if (match) {
          lang = match[1];
          title = mdxTagProps.props.className.match('title=')
            ? mdxTagProps.props.className.split('title=').pop()
            : ``;
        }
      }
      return (
        <Code
          is="block"
          {...mdxTagProps}
          {...mdxTagProps.props}
          lang={lang}
          title={title}
        />
      );
    } else {
      return <pre {...props} />;
    }
  },
};
