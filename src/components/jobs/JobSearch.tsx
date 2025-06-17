
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Filter } from 'lucide-react';

interface JobSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
}

const JobSearch = ({ searchQuery, setSearchQuery, locationFilter, setLocationFilter }: JobSearchProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Search for Jobs</h2>
          <p className="text-slate-600">Discover your next career opportunity</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Job Title/Keywords */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-4 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="pl-10 h-12 border-slate-300 focus:border-blue-500">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="new-york">New York, NY</SelectItem>
                  <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                  <SelectItem value="london">London, UK</SelectItem>
                  <SelectItem value="toronto">Toronto, ON</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="md:col-span-3">
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Search className="w-5 h-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-200">
            <span className="text-sm text-slate-600 mr-4">Popular searches:</span>
            {['Frontend Developer', 'Product Manager', 'Data Scientist', 'UI/UX Designer', 'Software Engineer'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-3 py-1 text-sm bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 rounded-full transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearch;
