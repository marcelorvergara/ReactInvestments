import { useState } from "react";
import { monthsAcc } from "../helpers/monthAcc";
import { investmentsData } from "../data/investments-2-1-2-3-1";
import Header from "../components/Header";
import Investments from "../components/Investments";
import MonthReport from "../components/MonthReport";

export default function ReactInvestmentsPage() {
  console.log(investmentsData);
  let actualVal = 0;
  let fees = 0;
  const profitValue =
    monthsAcc(investmentsData.reports).dez -
    monthsAcc(investmentsData.reports).jan;
  let profitPercent =
    (profitValue * 100) / monthsAcc(investmentsData.reports).jan;

  // calculando rendimento total de cada investimento
  let newInvestments = [...investmentsData.investments].map((investments) => {
    return {
      ...investments,
      value: 0,
    };
  });
  investmentsData.reports.forEach((it) => {
    newInvestments.find((f) => {
      if (f.id === it.investmentId) {
        f.value += it.value;
      }
      return null;
    });
  });

  return (
    <div>
      <Header size="large">React Investments</Header>
      {Object.entries(newInvestments).map((it) => {
        console.log(it);
        return (
          <Investments key={it[0]}>
            <div className="border p-2 text-center ">
              <h2 className="text-lg font-semibold mt-2 text-gray-600">
                {it[1].description}
              </h2>
              <h4>Rendimento Total: R$ {it[1].value}</h4>
            </div>
          </Investments>
        );
      })}
      <Investments>
        <div className="border p-2 text-center ">
          <h2 className="text-lg font-semibold mt-2 text-gray-600">
            Fundo de Ações
          </h2>
          <h4>
            Rendimento Total: R$ {profitValue.toFixed(2).replace(".", ",")} (
            {(profitPercent < 0 ? "-" : "+") +
              profitPercent.toFixed(2).replace(".", ",")}
            %)
          </h4>
        </div>
        {
          // cálculo do rendimento mensal
          Object.entries(monthsAcc(investmentsData.reports)).map((it) => {
            if (it[0] === "jan") {
              actualVal = it[1];
              fees = 0;
            } else {
              let difference = it[1] - actualVal;
              fees = (difference * 100) / actualVal;
              actualVal = it[1];
            }
            return (
              <MonthReport key={Math.random()} actualVal={fees.toFixed(2)}>
                {it}
              </MonthReport>
            );
          })
        }
      </Investments>
    </div>
  );
}
