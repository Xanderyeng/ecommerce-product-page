import React from "react";

import { styles } from "../styles";

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <section className={`max-w-7xl mx-auto relative z-0`}>
        <Component  className={`${styles.padding}`} />
      </section>
    );
  };

export default SectionWrapper;
