import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

interface IViewer {
  name: string;
  avatarUrl: string;
}
interface IQueryResult {
  viewer: IViewer;
}

const GET_VIEWER = gql`
  {
    viewer {
      name
      avatarUrl
    }
  }
`;

export const Header = () => {
  return (
    <Query<IQueryResult> query={GET_VIEWER}>
      {({ data, loading, error }) => {
        if (!data || !data.viewer) {
          return null;
        }
        if (error) {
          return <div className="viewer">{error.toString()}</div>;
        }
        if (loading) {
          return <div className="viewer">Loading ...</div>;
        }
        return (
          <div>
            <img src={data.viewer.avatarUrl} className="avatar" />
            <div className="viewer">{data.viewer.name}</div>
            <h1>GitHub Search</h1>
          </div>
        );
      }}
    </Query>
  );
};
