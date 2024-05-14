//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
 let counterValue = 0;
    counterElement.textContent = counterValue;
  () => { 
    cy.visit(baseUrl); 
    cy.on('window:alert', alertText => { 
        expect(alertText).to.equal('Counter Value : 0'); 
    }); 
    cy.get('#incrementBtn').click(); 
}
});
