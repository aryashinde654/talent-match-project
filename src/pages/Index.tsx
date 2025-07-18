
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import JobSearch from '@/components/jobs/JobSearch';
import FeaturedJobs from '@/components/jobs/FeaturedJobs';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
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

export default Index;
