it('should calculate the monthly rate correctly', function () {
  expect(calcMonthlyPayment(100, 1, .25)).toEqual(9.504420326390953);
  expect(calcMonthlyPayment(1000, 1, .07)).toEqual(86.52674609813772);
});
