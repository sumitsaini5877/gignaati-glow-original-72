
interface PrerequisitesTabProps {
  prerequisites: string;
}

const PrerequisitesTab = ({ prerequisites }: PrerequisitesTabProps) => {
  return (
    <div className="space-y-4">
      <p className="text-gray-700">{prerequisites}</p>
    </div>
  );
};

export default PrerequisitesTab;
