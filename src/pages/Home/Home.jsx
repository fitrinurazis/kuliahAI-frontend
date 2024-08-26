import TopNavbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-white ">
        <TopNavbar />
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
