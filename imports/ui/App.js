import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import gql from 'graphql-tag';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

const App = ({ userId, currentUser, refetch }) => (
  <div>
    <LoginButtons visible />
    {userId ? (
      <div>
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        <button onClick={() => refetch()}>Refetch!</button>
      </div>
    ) : 'Please log in!'}
  </div>
);

App.propTypes = {
  userId: React.PropTypes.string.isRequired,
  currentUser: React.PropTypes.object,
  refetch: React.PropTypes.func,
};

const GET_USER_DATA = gql`
  query ($id: String!) {
    user(id: $id) {
      emails {
        address
        verified
      }
      username
      randomString
      _id
    }
  }
`;

const withData = graphql(GET_USER_DATA, {
  props: ({ data: { error, loading, user, refetch } }) => {
    if (loading) return { userLoading: true };
    if (error) return { hasErrors: true };
    return {
      currentUser: user,
      refetch,
    };
  },
  options: (ownProps) => (
    { variables: { id: ownProps.userId } }
  ),
});

const AppWithData = withData(App);

// This container brings in Tracker-enabled Meteor data
const AppWithUserId = createContainer(() => {
  return {
    userId: Meteor.userId() || '',
  };
}, AppWithData);

export default AppWithUserId;
