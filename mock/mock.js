const Mock = require('mockjs');
const fetchMock = require('fetch-mock/es5/client');

//model
const mockUserName = () => Mock.mock('@cname()');
const getPoint = () => Mock.mock('@integer(50, 1000)');
//response
const startFetchMock = () =>{
    fetchMock.mock(/\/query\/username/, {
        body: {
            code: '1000',
            msg: '成功',
            data: mockUserName(),
        }
    });
}

module.exports = startFetchMock;