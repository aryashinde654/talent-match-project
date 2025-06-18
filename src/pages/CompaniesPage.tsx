
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Users } from 'lucide-react';

const CompaniesPage = () => {
  // Mock company data
  const companies = [
    {
      id: 1,
      name: "TechCorp Solutions",
      description: "Leading technology solutions provider specializing in AI and machine learning.",
      location: "San Francisco, CA",
      employees: "500-1000",
      openJobs: 12,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "InnovateLab",
      description: "Innovative startup focused on sustainable technology and green solutions.",
      location: "Austin, TX",
      employees: "50-200",
      openJobs: 8,
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=64&h=64&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "DataDriven Inc",
      description: "Data analytics and business intelligence company serving Fortune 500 clients.",
      location: "New York, NY",
      employees: "200-500",
      openJobs: 15,
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=64&h=64&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Companies</h1>
            <p className="text-slate-600">Discover companies and explore career opportunities</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <CardDescription className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {company.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{company.description}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {company.employees} employees
                    </div>
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 mr-1" />
                      {company.openJobs} open jobs
                    </div>
                  </div>
                  <Button className="w-full">
                    View Company Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompaniesPage;
