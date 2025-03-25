import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Briefcase, User } from 'lucide-react';

export default function MobileNav() {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around py-3">
        <Link to="/" className={`flex flex-col items-center ${location.pathname === '/' ? 'text-green-600' : 'text-gray-600'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        {/* <Link to="/jobs" className={`flex flex-col items-center ${location.pathname === '/jobs' ? 'text-green-600' : 'text-gray-600'}`}>
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </Link> */}
        <Link to="/jobs" className={`flex flex-col items-center ${location.pathname.includes('/jobs') ? 'text-green-600' : 'text-gray-600'}`}>
          <Briefcase size={24} />
          <span className="text-xs mt-1">Jobs</span>
        </Link>
        {/* <button className="flex flex-col items-center text-gray-600">
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button> */}
      </div>
    </div>
  );
}