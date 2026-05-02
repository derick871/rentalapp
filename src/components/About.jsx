import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation

const About = () => {
  return (
    <main className="min-h-screen p-8 bg-gray-50 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-6">
        
        {/* --- What is it Section --- */}
        <div className="flex flex-col md:flex-row items-center border border-transparent p-6 bg-slate-300 rounded-md gap-6">
          <div className="flex-1">
            <h3 className="font-bold text-amber-500 text-2xl mb-2">What is it</h3>
            <p className="text-gray-600 leading-relaxed">
              Spothouse is a modern platform designed to enable tenants to find 
              the perfect home while relocating from one town to another. 
              We connect the tenant and the landlord in a secure way.
            </p>
          </div>
          
          <div className="w-full md:w-60">
            <video 
              src="video/House seeking.mp4" 
              autoPlay 
              muted 
              loop 
              className="w-full h-30 rounded-md object-cover shadow-sm"
            />
          </div>
        </div>

        {/* --- Mission & Offers Container --- */}
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Objective */}
          <div className="flex-1 border border-transparent bg-slate-300 p-6 rounded-md">
            <h3 className="font-bold text-amber-500 text-xl mb-2">Objective</h3>
            <p className="text-gray-600">
              The main aim of the project is to simplify the process of searching for a house
              by providing accurate location, house standards, and price—all in one place.
            </p>
          </div>

          {/* What we offer */}
          <div className="flex-1 border border-transparent bg-slate-300 p-6 rounded-md">
            <h3 className="font-bold text-amber-500 text-xl mb-2">What we offer</h3>
            <nav>
              <ul className="text-gray-600 list-disc list-inside space-y-1">
                <li>House location with map</li>
                <li>Standard of the house</li>
                <li>Direct communication with Landlord</li>
                <li>Clear monthly payment</li>
              </ul>
            </nav>
          </div>
        </div>

        {/* --- Call to Action --- */}
        <div className="flex justify-center pt-6">
          <Link to="/contact">
            <button className="bg-slate-700 hover:bg-amber-500 text-white px-10 py-4 rounded-md font-bold transition-all active:scale-95 shadow-lg">
              Get started
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
};

export default About;