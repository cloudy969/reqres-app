export const getMonthlyPayment = (creditSum, percentage, creditTerm) => {
  let i = percentage / 100 / 12;
  let summary = creditSum * (i + i / (Math.pow(1 + i, creditTerm * 12) - 1));
  return summary;
};

export const getPercentages = (
  creditSum,
  percentage,
  creditTerm,
  monthlyPayment
) => {
  let monthlyPercentage = percentage / 100 / 12;
  let remainingCredit = creditSum;
  let percentages = 0;

  for (let i = 0; i < creditTerm * 12; i++) {
    let percentagePart = remainingCredit * monthlyPercentage;
    let debtPart = monthlyPayment - percentagePart;
    percentages += percentagePart;
    remainingCredit -= debtPart;
  }

  return percentages;
};

export const getEstatePrice = (monthlyPayment, percentage, creditTerm) => {
  let i = percentage / 100 / 12;
  let price = monthlyPayment / (i + i / (Math.pow(1 + i, creditTerm * 12) - 1));
  return price;
};

export const getChartData = (
  creditSum,
  percentage,
  creditTerm,
  monthlyPayment
) => {
  let monthlyPercentage = percentage / 100 / 12;
  let remainingCredit = creditSum;
  let percentages = 0;
  let sumDebtPart = 0;

  const data = [
    {
      month: 0,
      sum: creditSum,
      debt: sumDebtPart,
      percent: percentages,
    }
  ];

  for (let i = 1; i <= creditTerm * 12; i++) {
    let percentagePart = Math.round(remainingCredit * monthlyPercentage);
    let debtPart = monthlyPayment - percentagePart;
    percentages += percentagePart;
    remainingCredit -= debtPart;
    sumDebtPart += debtPart;

    let dataObject = {
      month: i,
      sum: remainingCredit < 0 ? 0 : remainingCredit,
      debt: sumDebtPart > creditSum ? creditSum : sumDebtPart,
      percent: percentages,
    };

    data.push(dataObject);
  }
  return data;
};
