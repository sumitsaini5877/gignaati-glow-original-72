
interface TitlePreviewProps {
  title: string;
}

const TitlePreview = ({ title }: TitlePreviewProps) => (
  <div>
    <h3 className="font-medium text-gray-500">Title</h3>
    <p className="text-lg font-semibold">{title || "No title provided"}</p>
  </div>
);

export default TitlePreview;
