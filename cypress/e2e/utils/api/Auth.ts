// Auth.ts

interface MaterialProperties {
  id: string;
  description: string;
  category: string;
  stockQnty: number;
}

class Auth {
  static login(): Cypress.Chainable<string> {
    return cy
      .request({
        method: 'POST',
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwSJ7k82Up2e_BFVEoeSQ1pbVp0FPRKE0',
        body: {
          email: "mrcleng@gmail.com",
          password: "$Cleng0206",
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        console.log("TOKENInter", response.body.idToken);
        return response.body.idToken as string;
      });
  }

  static fetchUserData(): Cypress.Chainable {
    return Auth.login().then((token) => {
      return cy
        .request({
          method: 'GET',
          url: `https://barber-app-proj.herokuapp.com/api/clients`,
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          expect(res.status).to.eq(200);
        });
    });
  }

  static fetchMaterials(): Cypress.Chainable {
    return Auth.login().then((token) => {
      return cy
        .request({
          method: 'GET',
          url: `/api/materials`,
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          expect(res.status).to.eq(200);
          return res.body;
        });
    });
  }

  static validateMaterialByName(
    materials: any[],
    name: string,
    expectedProperties: MaterialProperties
  ): void {
    const material = materials.find((item) => item.name === name);

    // Assert that the material with the given name exists
    expect(material, `Material with name "${name}" should exist`).to.not.be.undefined;

    if (material) {
      // Perform assertions on the expected properties
      expect(material).to.have.property('id', expectedProperties.id);
      expect(material).to.have.property('description', expectedProperties.description);
      expect(material).to.have.property('category', expectedProperties.category);
      expect(material).to.have.property('stockQnty', expectedProperties.stockQnty);
    }
  }
}

export default Auth;
