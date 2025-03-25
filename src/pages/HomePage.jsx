import { Link } from 'react-router-dom';
import { Search, Briefcase, GraduationCap, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Software Development Engineer 1 (SDE-1)",
    company: "Flipkart",
    location: "Bangalore",
    type: "Full Time",
    experience: "0-2 Years",
    applyLink: "https://jobs.pwskills.com/search-jobs/?id=6638c1ce953ac7369805dc3c",
    description: "As an SDE-1 at Flipkart, you'll build scalable and efficient systems, solve complex problems using DS & Algorithms, and contribute to core business and tech innovations.",
    salary: "₹32.57 LPA",
    skills: ["Java", "DSA", "System Design"],
    compensation: {
      base: "₹18L Base",
      variable: "₹1.8L Variable",
      joining: "₹3L Joining Bonus",
      retention: "₹3L Retention Bonus",
      esops: "₹5.07L ESOPs",
      benefits: "₹1.69L Benefits"
    }
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Hyderabad",
    type: "Full Time",
    experience: "2-5 Years",
    applyLink: "https://jobs.pwskills.com/search-jobs/?id=6638c1ce953ac7369805dc3c",
    description: "Join Microsoft's frontend team to build next-generation web applications using modern technologies and frameworks.",
    salary: "₹28.5 LPA",
    skills: ["React", "TypeScript", "Next.js"]
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Amazon",
    location: "Bangalore",
    type: "Full Time",
    experience: "3-6 Years",
    applyLink: "https://jobs.pwskills.com/search-jobs/?id=6638c1ce953ac7369805dc3c",
    description: "Work on cutting-edge ML models and help drive data-driven decisions across Amazon's ecosystem.",
    salary: "₹35 LPA",
    skills: ["Python", "ML", "Deep Learning"]
  }
];

const applicationSteps = [
  {
    title: "Create Profile",
    description: "Sign up and complete your profile with relevant experience and skills",
    icon: Users
  },
  {
    title: "Search Jobs",
    description: "Browse through our curated list of top tech opportunities",
    icon: Search
  },
  {
    title: "Apply",
    description: "Quick apply with your profile to multiple positions",
    icon: Briefcase
  },
  {
    title: "Get Hired",
    description: "Interview with top companies and land your dream job",
    icon: Award
  }
];

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Dream Job with <span className="text-indigo-600">Be Practical</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Connect with top companies hiring tech talent
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center bg-gray-50 rounded-lg p-2">
                <Search className="text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  className="w-full p-2 outline-none bg-transparent"
                />
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Jobs</h2>
            <Link to="/jobs" className="text-indigo-600 flex items-center hover:text-indigo-700">
              View All Jobs <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {job.experience}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/apply/${job.id}`}
                  className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Be Practical</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Companies</h3>
              <p className="text-gray-400">Access opportunities from leading tech companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Jobs</h3>
              <p className="text-gray-400">All jobs are verified and from trusted employers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-400">Find opportunities that match your career goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541`}
                    alt="Profile"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">Bhaskar</h3>
                    <p className="text-gray-600">Software Engineer at Google</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Be Practical helped me land my dream job. The process was smooth and the support was incredible!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}