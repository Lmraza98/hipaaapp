export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            Build Your HIPAA-Compliant App &ndash; Fast, Secure, Certified
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Work with healthcare app specialists who understand HIPAA, PHI, and secure architecture &ndash; so you can launch with confidence.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Get a Free HIPAA Consultation
          </button>
        </div>
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="absolute top-1/4 -left-12">
              <div className="bg-blue-400 p-3 rounded-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 md:right-12">
            <div className="bg-blue-100 p-4 rounded-lg border-2 border-blue-300 relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-center text-blue-600 font-bold mt-6">
                <div className="text-xs">HIPAA</div>
                <div className="text-xs">VERIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-12 border-b border-slate-200">
        {/* HIPAA Compliance Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            HIPAA Compliance Isn&apos;t Optional &ndash; It&apos;s Mandatory
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Avoid fines up to $1.5M per violation</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Build patient trust and meet federal standards</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Ensure secure messaging, data storage, and user access</span>
            </li>
          </ul>
        </div>

        {/* Apps We Build Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Apps We Build HIPAA-Compliant
          </h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Patient messaging platforms</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Telehealth video apps</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>EMR/EHR integrated apps</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Appointment scheduling portals</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Remote patient monitoring systems</span>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Internal healthcare team communication apps</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">
          Trusted Healthcare App Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">HIPAA Expertise</h3>
            <p className="text-slate-600 text-sm">Ensuring compliance through every stage of development</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Rapid Development</h3>
            <p className="text-slate-600 text-sm">Launch your app quickly without sacrificing security</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Custom Architecture & Scalability</h3>
            <p className="text-slate-600 text-sm">Tailored solutions designed for growth</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Custom Architecture & Scalability</h3>
            <p className="text-slate-600 text-sm">Tailored solutions designed for growth</p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          See What Others Say
        </h2>
        <div className="text-slate-700 italic">
          &quot;The team helped us launch a secure telehealth platform in under 6 months &ndash; fully HIPAA compliant and bulletproof&quot;
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-16 text-center pb-12">
        <h2 className="text-2xl font-bold text-slate-800">
          Ready to Launch Your HIPAA App? Let&apos;s Talk.
        </h2>
      </div>
    </div>
  );
}
