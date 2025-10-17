
// Removido Material Tailwind para evitar erros de tipagem
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div>
      <h1 className="font-bold text-4xl text-gray-800">
        {count}
      </h1>
      <h6 className="mt-1 font-medium text-lg text-gray-600">
        {title}
      </h6>
    </div>
  );
}


export default StatsCard;
