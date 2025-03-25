import { useState } from "react";
import { Search, MapPin, Building, Clock, ArrowLeft } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Software Development Engineer 1 (SDE-1)",
    company: "Flipkart",
    location: "Bangalore",
    type: "Full Time",
    experience: "0-2 Years",
    applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfa3uvIVMA6_5SUibk0_-FHJ4m_azDOEhL9irDnnsuzmiu8bA/viewform",
    description:
      "Flipkart is hiring SDE-1 engineers to develop scalable and efficient systems, solve complex problems, and contribute to core tech innovations.",
    salary: "₹32.57 LPA",
    skills: ["Java", "DSA", "System Design"],
    responsibilities: [
      "Design OOP models and implement scalable business logic.",
      "Solve complex problems using strong DS & Algo skills.",
      "Work on real-world applications: supply chain, search, fraud detection, analytics, etc.",
      "Write clean, efficient, and maintainable code in Java/C++/Scala.",
    ],
    requirements: [
      "Strong problem-solving and coding skills.",
      "Excellent grasp of DS, Algorithms, and OOP concepts.",
      "Experience with at least one general-purpose programming language.",
      "Ability to handle abstract and real-world problems efficiently.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer || Capgemini Exceller 2024-25",
    company: "Capgemini",
    location: "PAN India",
    type: "Full Time",
    experience: "Fresher",
    applyLink: "https://app.joinsuperset.com/join/#/signup/student/jobprofiles/b2b3410b-b0f4-4b50-86e5-a0c918a2f9b1",
    description:
      "Capgemini is hiring top technical graduates to join us as part of our Exceller program, where you'll work with diverse teams, cross-functional projects, and contribute to sustainable tech solutions.",
    salary: "₹4 LPA - ₹7.5 LPA",
    skills: ["Java", "C++", "Problem-Solving", "Software Development"],
    responsibilities: [
      "Contribute to a global business and technology team.",
      "Design, develop, and maintain core modules.",
      "Work on new and emerging technologies to solve customer problems.",
      "Develop scalable business logic and architecture.",
    ],
    requirements: [
      "Strong programming skills and ability to review complex code.",
      "Good analytical and problem-solving abilities.",
      "Willing to work in any Capgemini location and travel as required.",
      "Active DigiLocker account and Aadhar-linked mobile number required.",
    ],
  },
  {
    id: 3,
    title: "Software Developer - Virtual Drive",
    company: "Mallow Technologies",
    location: "Coimbatore/Karur, Tamil Nadu",
    type: "Full Time",
    experience: "Fresher",
    applyLink: "https://forms.office.com/pages/responsepage.aspx?id=1Hi3Cx6Ktk6hZfgCnIpeE1HecHxNr2xIgjhe4p3iho1URFM4OEI1R1A1VDFPS0FBUDQyV0VSNEc5RS4u&route=shorturl",
    description:
      "Mallow Technologies is conducting a virtual drive for freshers to join as Software Developers. This role offers exciting opportunities to work on core software development projects.",
    salary: "₹4.2 LPA",
    skills: ["C", "C++", "Java", "Python"],
    responsibilities: [
      "Develop and maintain scalable applications.",
      "Collaborate with teams to optimize performance and security.",
      "Write clean, efficient, and maintainable code.",
      "Participate in debugging and troubleshooting issues.",
    ],
    requirements: [
      "Graduates from 2023, 2024, or 2025.",
      "BE/BTech, MCA, MSc (All Branches).",
      "Strong problem-solving and coding abilities.",
      "Must register by 31st March 2025 to attend the virtual drive on 5th April 2025.",
    ],
  },
  {
    id: 4,
    title: "Software Developer & Content/Technical Writer",
    company: "Zoho",
    location: "Tamil Nadu",
    type: "Full Time",
    experience: "0-2 Years",
    applyLink: "https://careers.zohocorp.com/forms/fcc89b5ebd373d598e0224d10f2199d1976eb21e6e0226d5c35bfacc49166c9d",
    description:
      "Zoho is looking for Software Developers and Technical Writers to join our team. The role involves working on high-performance applications and producing technical documentation.",
    salary: "Based on experience",
    skills: ["C", "C++", "Java", "Technical Writing"],
    responsibilities: [
      "Develop scalable, high-performance applications.",
      "Write well-structured, testable, and efficient code.",
      "Produce end-to-end content for technical documentation.",
      "Collaborate with teams for content standardization and SEO optimization.",
    ],
    requirements: [
      "BE/BTech, MCA, MSc graduates (Up to 2025, 2026 students not eligible).",
      "Strong analytical and coding skills.",
      "Excellent written communication for Technical Writer role.",
      "Candidates must be willing to work from any Tamil Nadu location.",
    ],
  },
 ,
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [showDetails, setShowDetails] = useState(false);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      <div className="bg-white border-b px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="flex items-center bg-gray-50 rounded-lg p-2">
              <Search className="text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full p-2 bg-transparent outline-none"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings & Job Details Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Job Listings */}
          <div className={`md:w-1/3 w-full ${showDetails ? "hidden md:block" : "block"}`}>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => {
                    setSelectedJob(job);
                    setShowDetails(true);
                  }}
                  className={`p-4 border-b last:border-b-0 cursor-pointer transition-colors ${
                    selectedJob?.id === job.id ? "bg-green-50" : "hover:bg-gray-50"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-green-600 mb-2">{job.company}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.experience}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Details Section */}
          {selectedJob && (
            <div className={`flex-1 bg-white rounded-lg shadow-sm p-6 ${showDetails ? "block" : "hidden md:block"}`}>
              {/* Back Button for Mobile */}
              <button
                onClick={() => setShowDetails(false)}
                className="md:hidden flex items-center gap-2 text-green-600 mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Job Listings
              </button>

              <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
              <div className="flex items-center gap-2 mt-2">
                <Building className="w-5 h-5 text-gray-500" />
                <span className="text-green-600">{selectedJob.company}</span>
              </div>

              {/* Job Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">{selectedJob.location}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Experience</div>
                  <div className="font-medium">{selectedJob.experience}</div>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-gray-700">{selectedJob.description}</p>

              {/* Skills */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Skills Required</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedJob.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Responsibilities</h3>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Requirements</h3>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <a
                href={`/apply/${selectedJob.id}`}
               
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mt-4"
              >
                Apply Now
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
