
interface TagsPreviewProps {
  tags: string[];
}

const TagsPreview = ({ tags }: TagsPreviewProps) => (
  <div>
    <h3 className="font-medium text-gray-500">Tags</h3>
    <div className="flex flex-wrap gap-2 mt-1">
      {tags.length > 0 ? (
        tags.map((tag, index) => (
          <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))
      ) : (
        <p className="text-gray-600">No tags provided</p>
      )}
    </div>
  </div>
);

export default TagsPreview;
