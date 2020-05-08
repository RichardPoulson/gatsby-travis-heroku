/**
 * @author Richard Poulson <contact@richardpoulson.com>
 * @version 0.1.0
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer <footer> - HTML: Hypertext Markup Language | MDN}
 */

import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';

interface FooterProps extends TypographyProps {
  author?: string;
}

function Footer(props: FooterProps) {
  const { className, author, ...other } = props;

  return (
    <footer className={className}>
      <Typography {...other}>
        {'Copyright © '}
        {new Date().getFullYear()}
        {author ? ' ' + author + '.' : '.'}
    </Typography>
    </footer>
  );
}

export default Footer;
