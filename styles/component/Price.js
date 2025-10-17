export default function PriceCard() {
  const commissions = [
    {
      title: "Small Projects",
      range: "$5K – $10K",
      fee: "$500 fee",
    },
    {
      title: "Medium Projects",
      range: "$10K – $25K",
      fee: "$750 – $1,000 fee",
    },
    {
      title: "Large Projects",
      range: "$25K+",
      fee: "$1,000 – $1,500 fee",
    },
    {
      title: "Luxury Projects",
      range: "$50K+",
      fee: "Up to $2,500 fee",
    },
  ];

  return (
    <div className="flex justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl max-w-md w-full">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">Commission Structure</h2>
        </div>
        <ul className="divide-y">
          {commissions.map((item, index) => (
            <li key={index} className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-500">{item.range}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-blue-600 font-bold">{item.fee}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
