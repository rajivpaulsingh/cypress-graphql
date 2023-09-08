describe('GraphQL API Test', () => {
    it('Should make a GraphQL query and validate the response', () => {
      // Define your GraphQL query
      const graphqlQuery = `
        query {
          // Your GraphQL query here
          // For example, let's say you want to fetch a user by ID
          user(id: 1) {
            id
            name
            email
          }
        }
      `;
  
      cy.request({
        method: 'POST',
        url: 'https://your-graphql-endpoint.com',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer your-access-token',
        },
        body: {
          query: graphqlQuery,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
  
        // Assert that the response body contains the expected data
        expect(response.body.data).to.exist;
        expect(response.body.data.user).to.exist;
        expect(response.body.data.user.id).to.equal(1); 
        expect(response.body.data.user.name).to.exist;
        expect(response.body.data.user.email).to.exist;
      });
    });
  });
  