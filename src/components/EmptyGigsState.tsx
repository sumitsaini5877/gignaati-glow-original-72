
import React from 'react';

const EmptyGigsState = () => {
  return (
    <div className="text-center py-12">
      <h3 className="text-xl font-medium mb-2">No gigs found</h3>
      <p className="text-gray-500">Try adjusting your filters or search query</p>
    </div>
  );
};

export default EmptyGigsState;
