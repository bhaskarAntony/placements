import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle, User, Mail, Phone, GraduationCap } from "lucide-react";
import Loading from "./Loading";

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
export default function ApplicationForm() {
  const { jobId } = useParams();
  const [step, setStep] = useState(1);
  const [job, setJob] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://placements-backend-99z8.onrender.com/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, jobId }),
      });

      const data = await response.json();
      if (data.success) {
        setShowSuccess(true);
        window.location.href = job.applyLink;
      } else {
        alert("Error submitting application.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { title: "Personal Info", icon: User, fields: ["name"] },
    { title: "Contact", icon: Mail, fields: ["email", "phone"] },
    { title: "Education", icon: GraduationCap, fields: ["college"] },
  ];
  if(loading){
    return <Loading/>
  }
  useEffect(()=>{
    const currentJob = jobs.find((item)=>item.id == jobId);
    console.log(currentJob);
    setJob(currentJob)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {showSuccess ? (
          <div className="text-center bg-white rounded-lg shadow-sm p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Application Submitted!
            </h2>
            <p className="text-gray-600 mb-4">Redirecting to job portal...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Job Application
              </h2>

              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {steps.map((s, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        step > index + 1
                          ? "bg-green-500"
                          : step === index + 1
                          ? "bg-green-600"
                          : "bg-gray-200"
                      } text-white`}
                    >
                      <s.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-gray-600">{s.title}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border rounded-md p-2"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full border rounded-md p-2"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      College Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border rounded-md p-2"
                      value={formData.college}
                      onChange={(e) =>
                        setFormData({ ...formData, college: e.target.value })
                      }
                    />
                  </div>
                )}

                <div className="flex justify-between pt-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
                    >
                      Previous
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 ml-auto"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit Application"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
