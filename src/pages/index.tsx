import * as React from "react";
import { graphql } from "gatsby";

import "uikit/dist/css/uikit.css";

import * as styles from "./index.module.scss";

interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
        note: {
          url: string;
          posts: Array<{
            title: string;
            link: string;
          }>;
        };
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
        note {
          posts {
            title
            link
          }
        }
      }
    }
  }
`;

export const NotePostComponent = (props: { title: string; link: string }) => {
  return (
    <div>
      <h5>{props.title}</h5>
      <p>{props.link}</p>
    </div>
  );
};

const Component: React.SFC<IIndexPageProps> = props => {
  const { name, tagline, note } = props.data.site.siteMetadata;

  return (
    <div>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <div className="uk-flex uk-flex-center">
        {note.posts.map(prop => {
          return <NotePostComponent {...prop} />;
        })}
      </div>
    </div>
  );
};

export default Component;
