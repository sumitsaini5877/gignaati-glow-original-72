
interface DemoLinkPreviewProps {
  demoLink: string;
}

const DemoLinkPreview = ({ demoLink }: DemoLinkPreviewProps) => (
  <div>
    <h3 className="font-medium text-gray-500">Demo Link</h3>
    {demoLink ? (
      <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {demoLink}
      </a>
    ) : (
      <p className="text-gray-600">No demo link provided</p>
    )}
  </div>
);

export default DemoLinkPreview;
