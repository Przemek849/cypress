describe('GET test', () => {
    
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        failOnStatusCode: false
    }

    it('response code should be 200', () => {
        cy.request(request).then(response => {
            const status = response.status;
            assert.equal(200, status);
        })
    })

    it('test duration', () => {
        cy.request(request).then(response => {
          assert.isTrue(response.duration <= 1500)
        })
      })

      it('random test', () => {
        for(let i = 0; i < 10; i++) {
            const randomInt = getRandomInt(1000);

            const requestRandom = {
                url: 'https://httpbin.org/headers',
                id: randomInt
            }

            cy.request(requestRandom).then(response => {
                assert.isTrue(response.status == 200)
             })
        }
      })
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

describe('GET User Agent', () => {
    
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        headers: {
            'user-agent': 'test user-agent'
        },
        failOnStatusCode: false
    }

    it('user-agent test', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.equal("test user-agent", response.requestHeaders['user-agent'])
        })
    })

});

describe('POST test', () => {
    const bodyData = {
        bodyKey: "bodyValue"
    }

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: {bodyKey: "bodyValue"},
        failOnStatusCode: false
    }

    it('body response', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            expect(response.body.json).to.deep.equal({bodyKey: "bodyValue"})
        })
    })
})

describe('User-Agent Test', () => {
    it('should get the User-Agent from server response', () => {
        cy.request('https://httpbin.org/user-agent').then((response) => {
            expect(response.status).to.eq(200);
            cy.log(`User-Agent: ${response.body['user-agent']}`);
        });
    });
});

describe("DELETE test", () => {
    it('should send delete request', () => {
        const deleteRequest = {
            method: 'DELETE',
            url: 'https://httpbin.org/delete',
            headers: {
                'Accept': 'application/json'
            }
        }

        cy.request(deleteRequest).then(response => {
            assert.equal(200, response.status);
        })
    })
})

describe('PUT request', () => {

    it('PUT check', () => {
    const bodyData = {
        bodyKey: "bodyValue"
    }

    cy.request({
        method: "PUT",
        url: "https://httpbin.org/put",

    }).then(response => {
        assert.equal(200, response.status);
        assert.notStrictEqual(bodyData, response.body.data);
    })

    })
})

describe("PATCH request", () => {
    it("PATCH check", () => {
        const PATCHrequest = {
            method: "PATCH",
            url: "https://httpbin.org/patch",
            body: {
                "key": "value"
            },
            headers: {
                "Accept": "application/json",
            }
        }
        cy.request(PATCHrequest).then(response => {
            assert.equal(200, response.status);
            expect(response.body.json).to.deep.equal({"key": "value"});
        })

    })
})

describe("Parameters check", () => {
    it("sending parameters", () => {
        cy.request({
            method: "GET",
            url: "https://httpbin.org/get",
            qs: {
                "key": "value1"
            },
            failOnStatusCode: false
        }).then(response => {
            assert.equal("value1", response.body.args["key"])
        })
    })
})