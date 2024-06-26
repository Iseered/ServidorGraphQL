const { GraphQLJSON } = require('graphql-type-json');
const fetch = require('node-fetch');

const resolvers = {
  Query: {
    countries: async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const countries = await response.json();
      return countries;
    },
    country: async (_, { cca3 }) => {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
      const [country] = await response.json();
      return country;
    },
  },
  JSON: GraphQLJSON,
};

module.exports = resolvers;
