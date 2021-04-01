const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = require('chai').expect
const url = 'http://localhost:3000';


chai.use(chaiHttp)
chai.should()

describe('response 200 ', () => {
    it('response request 200', (done) => {
        chai.request(url)
            .get('/humanAid?countryCode=SD')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});