
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JobSearch from '@/components/jobs/JobSearch';
import FeaturedJobs from '@/components/jobs/FeaturedJobs';

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">All Jobs</h1>
            <p className="text-slate-600">Discover your next career opportunity</p>
          </div>
        </div>
      </div>

      <JobSearch 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
      />
      
      <FeaturedJobs searchQuery={searchQuery} locationFilter={locationFilter} />
      
      <Footer />
    </div>
  );
};

export default JobsPage;
