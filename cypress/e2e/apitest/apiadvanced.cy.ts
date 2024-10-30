import Auth from '../utils/api/Auth';

describe('User API Tests with Auth', () => {

    it('Authenticates and fetches user data without use class', () => {
        cy.request({
          method: 'POST',
          url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwSJ7k82Up2e_BFVEoeSQ1pbVp0FPRKE0',
          body: {
            email: "mrcleng@gmail.com",
            password: "$Cleng0206"
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          console.log("TOKEN",response.body.idToken)
          const token = response.body.idToken;
          cy.request({
            method: 'GET',
            url: `/api/clients`,
            headers: { Authorization: `Bearer ${token}` }
          }).then((userResponse) => {
            expect(userResponse.status).to.eq(200);
            console.log(userResponse)
          });
        });
    })
    it('Fetches user data using Auth class', () => {
        Auth.fetchUserData().then((response) => {
            console.log(response)
          expect(response.status).to.eq(200);
        });
    });
    it('Fetches materials data class', () => {

          Auth.fetchMaterials().then((materials) => {
            expect(materials).to.be.an('array', 'Materials should be returned as an array');
            const expectedProperties = {
              id: '6504f1eecc8f9016852c06e8',
              description: 'Lavagem simples com shampo',
              category: 'servico',
              stockQnty: 0,
            };
            Auth.validateMaterialByName(materials, 'TESTE Corte Adulto', expectedProperties);
          });
  
        

    });


})
