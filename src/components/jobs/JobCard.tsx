
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MapPin, Clock, Building, Heart } from 'lucide-react';
import { useState } from 'react';

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

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    // Add your save logic here
    console.log(`Job ${job.id} ${isSaved ? 'unsaved' : 'saved'}`);
  };

  const handleApply = () => {
    // Add your apply logic here
    console.log(`Applied to job ${job.id}`);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-2xl">
              {job.logo}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              <p className="text-slate-600 flex items-center">
                <Building className="w-4 h-4 mr-1" />
                {job.company}
              </p>
            </div>
          </div>
          <button
            onClick={handleSave}
            className={`p-2 rounded-full transition-colors ${
              isSaved 
                ? 'text-red-500 bg-red-50 hover:bg-red-100' 
                : 'text-slate-400 hover:text-red-500 hover:bg-red-50'
            }`}
          >
            <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
            {job.type}
          </Badge>
          {job.isRemote && (
            <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
              Remote
            </Badge>
          )}
        </div>

        <p className="text-slate-600 text-sm line-clamp-3">
          {job.description}
        </p>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {job.postedDate}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="font-semibold text-slate-800">{job.salaryRange}</span>
          <Button 
            onClick={handleApply}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
