/// <reference types="cypress" />

it('new test', () => {

})

it.only('new test2', () => {
    
    expect('1').to.be.a('string', 'nooo why fail??');

    const obj = {a:1, b:2};
    expect(obj).to.have.property('a')
    expect(obj).to.have.property('a', 1)
    expect(obj).to.not.have.property('x')
    expect(obj).to.not.be.empty


    const arr = [1, 2, 3]
    expect(arr).to.have.members([3, 1, 2]);
})

it.skip('skip test', () => {
    
})