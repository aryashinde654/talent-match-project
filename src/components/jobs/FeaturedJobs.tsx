
import { useState, useEffect } from 'react';
import JobCard from './JobCard';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salaryRange: string;
  description: string;
  postedDate: string;
  isRemote: boolean;
  logo: string;
}

interface FeaturedJobsProps {
  searchQuery: string;
  locationFilter: string;
}

const FeaturedJobs = ({ searchQuery, locationFilter }: FeaturedJobsProps) => {
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salaryRange: '$120k - $160k',
      description: 'Join our dynamic team to build cutting-edge web applications using React, TypeScript, and modern development practices.',
      postedDate: '2 days ago',
      isRemote: true,
      logo: '🚀'
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'InnovateLab',
      location: 'New York, NY',
      type: 'Full-time',
      salaryRange: '$140k - $180k',
      description: 'Lead product strategy and development for our flagship SaaS platform. Work with cross-functional teams to deliver exceptional user experiences.',
      postedDate: '1 day ago',
      isRemote: false,
      logo: '💡'
    },
    {
      id: '3',
      title: 'UX/UI Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Full-time',
      salaryRange: '$90k - $130k',
      description: 'Create beautiful and intuitive user interfaces for web and mobile applications. Collaborate with product and engineering teams.',
      postedDate: '3 days ago',
      isRemote: true,
      logo: '🎨'
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'DataFlow Analytics',
      location: 'Toronto, ON',
      type: 'Full-time',
      salaryRange: '$110k - $150k',
      description: 'Analyze complex datasets to drive business insights and build predictive models using Python, SQL, and machine learning techniques.',
      postedDate: '1 week ago',
      isRemote: true,
      logo: '📊'
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'London, UK',
      type: 'Full-time',
      salaryRange: '£70k - £95k',
      description: 'Manage cloud infrastructure and deployment pipelines. Experience with AWS, Docker, and Kubernetes required.',
      postedDate: '4 days ago',
      isRemote: false,
      logo: '☁️'
    },
    {
      id: '6',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Contract',
      salaryRange: '$80k - $120k',
      description: 'Build and maintain web applications using Node.js, React, and PostgreSQL in a fast-paced startup environment.',
      postedDate: '5 days ago',
      isRemote: true,
      logo: '⚡'
    }
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    let filtered = jobs;

    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (locationFilter && locationFilter !== 'all') {
      filtered = filtered.filter(job => {
        if (locationFilter === 'remote') {
          return job.isRemote || job.location.toLowerCase().includes('remote');
        }
        return job.location.toLowerCase().includes(locationFilter.toLowerCase());
      });
    }

    setFilteredJobs(filtered);
  }, [searchQuery, locationFilter, jobs]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Featured Jobs</h2>
          <p className="text-slate-600">Discover opportunities from top companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No jobs found</h3>
            <p className="text-slate-600">Try adjusting your search criteria or browse all jobs.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
