var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function addCompanySalesTotal(sales) {
  var total = 0;
  for (var i = 0; i < sales.length; i++) {
    total += sales[i];
  }
  return total;
}

function addCompanyTaxes(total, province) {
  return total * salesTaxRates[province];
}

function calculateSalesTax(salesData, taxRates) {

  var result = {};

  for (var i = 0; i < salesData.length; i++) {

    var companyName = salesData[i].name;
    var totalSales = addCompanySalesTotal(salesData[i].sales);
    var totalTaxes = addCompanyTaxes(totalSales, salesData[i].province);

    if (!result[companyName]) {
      result[companyName] = { totalSales: totalSales, totalTaxes: totalTaxes };
    }
    else {
      result[companyName].totalSales += totalSales;
      result[companyName].totalTaxes += totalTaxes;
    }

  }

  console.log(result);

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/