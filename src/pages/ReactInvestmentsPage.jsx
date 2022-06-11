import { useState } from "react";
import { monthsAcc } from "../helpers/monthAcc";
import { investmentsData } from "../data/investments-2-1-2-3-1";
import Header from "../components/Header";
import Investments from "../components/Investments";
import MonthReport from "../components/MonthReport";

export default function ReactInvestmentsPage() {
  let actualVal = 0;
  let fees = 0;
  let newInvestmentData = investmentsData;
  newInvestmentData.investments.forEach((inv) => {
    inv.months = [];
    newInvestmentData.reports.forEach((rep) => {
      if (inv.id === rep.investmentId) {
        inv.months.push(rep);
      }
    });
  });
  return (
    <div>
      <Header size="large">React Investments</Header>
      {Object.entries(newInvestmentData.investments).map((consolidated) => {
        let dec = consolidated[1].months.find((f) => f.month === 12).value;
        let jan = consolidated[1].months.find((f) => f.month === 1).value;
        let profit = dec - jan;
        let profitPercent = (profit * 100) / jan;
        console.log(profitPercent);
        return (
          <Investments key={consolidated[0]}>
            <div className="border p-2 text-center ">
              <h2 className="text-lg font-semibold mt-2 text-gray-600">
                {consolidated[1].description}
              </h2>
              <h4>
                Rendimento Total: R$ {profit.toFixed(2).replace(".", ",")} (
                {profitPercent.toFixed(2).replace(".", ",")}%)
              </h4>
            </div>
            {
              // cálculo do rendimento mensal
              Object.entries(monthsAcc(consolidated[1].months)).map((month) => {
                if (month[0] === "jan") {
                  actualVal = month[1];
                  fees = 0;
                } else {
                  let difference = month[1] - actualVal;
                  fees = (difference * 100) / actualVal;
                  actualVal = month[1];
                }
                return (
                  <MonthReport key={Math.random()} actualVal={fees.toFixed(2)}>
                    {month}
                  </MonthReport>
                );
              })
            }
          </Investments>
        );
      })}
    </div>
  );
}
