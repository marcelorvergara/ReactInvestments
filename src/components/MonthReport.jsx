export default function MonthReport({ children: record = "", actualVal = 0 }) {
  return (
    <div className="bg-gray-100 border-2 p-3 flex flex-row justify-between">
      <div>
        <span className="font-mono">{record[0]}/2020</span>{" "}
        <span className="font-semibold ml-8">
          R$ {parseInt(record[1]).toFixed(2).replace(".", ",")}
        </span>
      </div>
      <span className="ml-12">{actualVal}%</span>
    </div>
  );
}
