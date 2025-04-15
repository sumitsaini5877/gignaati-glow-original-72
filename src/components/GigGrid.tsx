
import { useState } from 'react';
import { FilterState } from './GigFilters';
import GigCard from './GigCard';
import PaginationControls from './PaginationControls';
import EmptyGigsState from './EmptyGigsState';
import { getFilteredAndSortedGigs, Gig } from '../services/GigDataService';

// Export the Gig type from this file since it's referenced in GigCard
export type { Gig };

interface GigGridProps {
  searchQuery: string;
  sortBy: string;
  filters: FilterState;
}

const GigGrid = ({ searchQuery, sortBy, filters }: GigGridProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gigsPerPage = 9;
  
  // Get filtered and sorted gigs
  const sortedGigs = getFilteredAndSortedGigs(searchQuery, sortBy, filters);
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedGigs.length / gigsPerPage);
  const indexOfLastGig = currentPage * gigsPerPage;
  const indexOfFirstGig = indexOfLastGig - gigsPerPage;
  const currentGigs = sortedGigs.slice(indexOfFirstGig, indexOfLastGig);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {sortedGigs.length === 0 ? (
        <EmptyGigsState />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentGigs.map((gig) => (
              <GigCard key={gig.id} gig={gig} />
            ))}
          </div>
          
          <PaginationControls 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </>
      )}
    </div>
  );
};

export default GigGrid;
