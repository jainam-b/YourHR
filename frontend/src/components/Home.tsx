

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="text-center bg-white p-12 rounded-3xl shadow-xl max-w-lg mx-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
          Welcome to YourHR
        </h1>
        <p className="text-3xl text-gray-800 mb-8">
        Connecting Talent with Opportunity
        </p>
        <a href="#learn-more" className="inline-block bg-indigo-700 text-white py-4 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-800 transition duration-300 ease-in-out">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
