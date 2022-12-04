const fetchProduct = require('../async.js');

describe('Async', () => {
  //💩
  it('async - done', (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
      done();
    });
  });

  //✨
  it('async - return', () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: 'Milk', price: 200 });
    });
  });

  //✨
  it('async - await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: 'Milk', price: 200 });
  });

  it('async - resolves', () => {
    expect(fetchProduct()).resolves.toEqual({ item: 'Milk', price: 200 });
  });

  it('async - reject', () => {
    expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
