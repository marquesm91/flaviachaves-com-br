import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as styles from './styles.module.scss';

const Header = ({ siteTitle }) => (
  <header className={styles.headerContainer}>
    <div>
      <h2 className={styles.headerText}>Flávia Chaves</h2>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
