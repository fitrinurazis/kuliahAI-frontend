const SidebarAdmin = () => {
  return (
    <div className="w-64 h-screen p-5 text-white bg-gray-800">
      <h1 className="mb-5 text-2xl font-bold">Admin Dashboard</h1>
      <ul>
        {/* <li className="mb-3">
          <Link to="/add-ebook">Add Ebook</Link>
        </li>
        <li className="mb-3">
          <Link to="/add-app">Add App</Link>
        </li>
        <li className="mb-3">
          <Link to="/add-chatai">Add Chat AI</Link>
        </li>
        <li className="mb-3">
          <Link to="/add-video">Add URL Video</Link>
        </li>
        <li className="mb-3">
          <Link to="/add-materi">Add URL Materi</Link>
        </li> */}
        <li className="mb-3">
          <p>Add Ebook</p>
        </li>
        <li className="mb-3">
          <p>Add App</p>
        </li>
        <li className="mb-3">
          <p>Add Chat AI</p>
        </li>
        <li className="mb-3">
          <p>Add URL Video</p>
        </li>
        <li className="mb-3">
          <p>Add URL Materi</p>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
