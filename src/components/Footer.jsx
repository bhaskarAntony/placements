import { GraduationCap, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-bold">Be Practical</span>
            </div>
            <p className="text-gray-400">
            Since its establishment in 2012, Be Practical Tech Solutions is training predominantly in IT courses. It has pioneered as a diversified entrepreneurship tapping into the necessities of the internet market in India, with its in-depth understanding of customers and companies
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/BangaloreBepractical/" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/bepractical_com" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/13338555/admin/" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/bepracticaltraining/" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://be-practical.com/about-us-2" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="https://be-practical.com/contact-us" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="https://be-practical.com/" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="https://be-practical.com/blogs" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Browse Candidates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Recruitment Solutions</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>#737C, 1stFloor,1st cross 3rd Stage,4th Block Basaveshwara nagar Bengaluru-560079</li>
              <li>Bangalore, Karnataka</li>
              <li>India - 560001</li>
              <li>info@be-practicle.com</li>
              <li>+91 9242079119</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Be Practical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}