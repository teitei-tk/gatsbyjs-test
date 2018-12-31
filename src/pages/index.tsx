import * as React from "react";
import { graphql } from "gatsby";

import * as styles from "./index.module.scss";

interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

const Component: React.SFC<IIndexPageProps> = props => {
  const { name, tagline } = props.data.site.siteMetadata;

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
  );
};

export default Component;
