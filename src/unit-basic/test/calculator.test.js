const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(3);
    expect(cal.value).toBe(3);
  });

  it('clear', () => {
    cal.set(5);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.add(4);
    expect(cal.value).toBe(4);
  });

  it('add should throw an error if value is greater than 100', () => {
    expect(() => cal.add(101)).toThrow('Value can not be greater than 100');
  });

  it('subtracts', () => {
    cal.subtract(10);
    expect(cal.value).toBe(-10);
  });

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0/0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1/0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('54/9 === 6', () => {
      cal.set(54);
      cal.divide(9);
      expect(cal.value).toBe(6);
    });
  });
});
