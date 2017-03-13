import { Random } from 'meteor/random';

export const typeDefs = [
  `
type Email {
  address: String
  verified: Boolean
}

type User {
  emails: [Email]
  randomString: String
  _id: String
}

type Query {
  user: User
}
`,
];

export const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      return context.user;
    },
  },
  User: {
    emails: ({ emails }) => emails,
    randomString: () => Random.id(),
  },
};
