import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
