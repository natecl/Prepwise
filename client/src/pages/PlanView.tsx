import { useParams } from "react-router-dom";

function PlanView() {
  const { id } = useParams();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Plan {id}</h1>
    </div>
  );
}

export default PlanView;
