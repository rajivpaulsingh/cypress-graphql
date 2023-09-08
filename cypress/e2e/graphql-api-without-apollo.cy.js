describe('Authenticated GraphQL API Test without apollo client', () => {

  it('should query GitHub GraphQL API with authentication', () => {
    // Define your GraphQL query
    const query = `
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

    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        query,
      },
    }).then((response) => {
      // Verify the response
      expect(response.status).to.equal(200);
      expect(response.body.data.viewer).to.have.property('login');
      expect(response.body.data.viewer).to.have.property('name');
    });
  });
});
