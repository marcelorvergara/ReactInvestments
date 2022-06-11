export function monthsAcc(investmentsData) {
  const months = {
    jan: 0,
    fev: 0,
    mar: 0,
    abr: 0,
    mai: 0,
    jun: 0,
    jul: 0,
    ago: 0,
    set: 0,
    out: 0,
    nov: 0,
    dez: 0,
  };

  investmentsData.forEach((it) => {
    switch (it.month) {
      case 1:
        months.jan += it.value;
        break;
      case 2:
        months.fev += it.value;
        break;
      case 3:
        months.mar += it.value;
        break;
      case 4:
        months.abr += it.value;
        break;
      case 5:
        months.mai += it.value;
        break;
      case 6:
        months.jun += it.value;
        break;
      case 7:
        months.jul += it.value;
        break;
      case 8:
        months.ago += it.value;
        break;
      case 9:
        months.set += it.value;
        break;
      case 10:
        months.out += it.value;
        break;
      case 11:
        months.nov += it.value;
        break;
      case 12:
        months.dez += it.value;
        break;
      default:
        console.log("error");
    }
  });
  return months;
}
