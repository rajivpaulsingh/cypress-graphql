import { ApolloClient, InMemoryCache, gql, createHttpLink } from '@apollo/client';

describe('Authenticated GraphQL API Test with Apollo Client', () => {

  it('should query GitHub GraphQL API with authentication', () => {
    // Define your GraphQL query
    const query = gql`
      query {
        viewer {
          login
          name
        }
      }
    `;

    // Replace 'your-auth-token' with your actual GitHub personal access token
    const authToken = 'your-github-personal-access-token';

    // GitHub's GraphQL API endpoint
    const apiUrl = 'https://api.github.com/graphql';

    // Create an Apollo Client instance with an HTTP link and authentication headers
    const client = new ApolloClient({
      link: createHttpLink({
        uri: apiUrl,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }),
      cache: new InMemoryCache(),
    });

    // Use the Apollo Client to send the GraphQL query
    cy.wrap(client.query({ query })).then((response) => {
      // Verify the response
      expect(response.data.viewer).to.have.property('login');
      expect(response.data.viewer).to.have.property('name');
    });
  });
});
