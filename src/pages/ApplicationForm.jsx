import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, User, Mail, Phone, GraduationCap } from 'lucide-react';

export default function ApplicationForm() {
  const { jobId } = useParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const applications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
    applications.push({
      ...formData,
      jobId,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('jobApplications', JSON.stringify(applications));
    setShowSuccess(true);
    setTimeout(() => {
      window.location.href = 'https://jobs.pwskills.com/search-jobs/?id=6638c1ce953ac7369805dc3c';
    }, 2000);
  };

  const steps = [
    {
      title: "Personal Info",
      icon: User,
      fields: ["name"]
    },
    {
      title: "Contact",
      icon: Mail,
      fields: ["email", "phone"]
    },
    {
      title: "Education",
      icon: GraduationCap,
      fields: ["college"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {showSuccess ? (
          <div className="text-center bg-white rounded-lg shadow-sm p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
            <p className="text-gray-600 mb-4">Redirecting you to the job portal...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Application</h2>
              
              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {steps.map((s, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      step > index + 1 ? 'bg-green-500' :
                      step === index + 1 ? 'bg-indigo-600' : 'bg-gray-200'
                    } text-white`}>
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
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                      onChange={(e) => setFormData({...formData, college: e.target.value})}
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
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ml-auto"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ml-auto"
                    >
                      Submit Application
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