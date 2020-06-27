const axios = require('axios');

const customerService = require('../src/controllers');
jest.mock("axios");
test('should return all users using mocked data', async () => {

    const customers = [
      {
        name: 'khushboo',
        email: 'a@b.com',
        age: 20,
        address: "abc"
      }
    ];
    const response = {data: customers};

    axios.get.mockImplementationOnce(() => Promise.resolve(resp));

    const customerData = await customerService.fetchAllCustomers();
    expect(customerData).toEqual(customers);

})
