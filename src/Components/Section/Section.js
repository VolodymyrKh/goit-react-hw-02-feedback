import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css'

const Section = ({ title, children }) => (
  <section>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

Section.defaultProps = {
  title: 'Section Title',
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
