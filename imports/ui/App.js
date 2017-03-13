import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import LoginForm from './LoginForm';

const App = ({ currentUser, refetch }) => (
  <div>
    <LoginForm />

    {currentUser
      ? <div>
          <pre>{JSON.stringify(currentUser, null, 2)}</pre>
          <button onClick={() => refetch()}>Refetch!</button>
        </div>
      : 'Please log in!'}
  </div>
);

App.propTypes = {
  currentUser: React.PropTypes.object,
  refetch: React.PropTypes.func,
};

const GET_USER_DATA = gql`
  query getCurrentUser {
    user {
      emails {
        address
        verified
      }
      randomString
      _id
    }
  }
`;

const withData = graphql(GET_USER_DATA, {
  props: ({ data: { error, loading, user, refetch } }) => {
    // xxx: display loading
    if (loading) return { userLoading: true };
    // xxx: display errors
    if (error) return { hasErrors: true };

    return {
      currentUser: user,
      refetch,
    };
  },
  // xxx: show example
  // options: (ownProps) => (
  //   { variables: { id: ownProps.userId } }
  // ),
});

export default withData(App);
