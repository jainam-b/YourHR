

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="text-center p-6">
        <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Welcome to YourHR
        </h1>
        <p className="text-4xl text-gray-300 mb-8">
          Connecting Talent with Opportunity
        </p>
        <a href="/signup" className="inline-block bg-indigo-600 text-white py-4 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
