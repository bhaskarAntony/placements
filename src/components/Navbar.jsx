import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <GraduationCap className="h-8 w-8 text-green-600" /> */}
              <span className="ml-2 text-xl font-bold text-gray-900"><img src="https://bepractical.s3.us-east-2.amazonaws.com/brand-logo.cc6e3cf088a8fd3005b1.jpg" width={150} alt="" /></span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2">Home</Link>
            <Link to="/jobs" className="text-gray-700 hover:text-green-600 px-3 py-2">Search Jobs</Link>
            <Link to="https://be-practical.com" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Need Featured Courses?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}