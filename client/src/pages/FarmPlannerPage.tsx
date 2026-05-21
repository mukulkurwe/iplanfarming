import { useParams } from 'react-router-dom';
import DashboardShell from '../components/DashboardShell';
import FarmPlannerTool from '../components/farm/plan/FarmPlannerTool';

export default function FarmPlannerPage() {
  const { farmId } = useParams<{ farmId: string }>();

  if (!farmId) return null;

  return (
    <DashboardShell>
      <FarmPlannerTool farmId={farmId} />
    </DashboardShell>
  );
}
