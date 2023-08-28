describe("WHEN visiting the website", () => {
	it("THEN should send a GET request to visitor count API", () => {
		cy.visit(Cypress.env("CLOUDFRONT_URL"));

		cy.request("GET", Cypress.env("API_URL")).its("status").should("equal", 200);
		cy.request("GET", Cypress.env("API_URL")).then((response) => {
			expect(response.body.body.visits).to.be.a("number");
		});
	});

	it("should increment visitors counter on visit by 1", () => {
		let visitorsCounter: string;
		let updatedVisitorsCounter: string;

		cy.visit(Cypress.env("CLOUDFRONT_URL"));
		cy.wait(1000);
		cy.get(".visit-count")
			.invoke("text")
			.then((text) => {
				visitorsCounter = text.replace(/[^0-9]/g, "");
			});
		cy.reload();

		cy.wait(1000);
		cy.get(".visit-count")
			.invoke("text")
			.then((text) => {
				updatedVisitorsCounter = text.replace(/[^0-9]/g, "");
				expect(parseInt(updatedVisitorsCounter)).to.be.greaterThan(parseInt(visitorsCounter));
				expect(parseInt(updatedVisitorsCounter)).to.be.equal(parseInt(visitorsCounter) + 1);
			});
	});
});
