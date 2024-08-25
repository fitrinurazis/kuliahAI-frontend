import { useState } from "react";
import axios from "axios";

const AddEbook = () => {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/ebooks", {
        nama,
        deskripsi,
        kategori,
        url,
      });
      console.log("Ebook added:", response.data);
    } catch (error) {
      console.error("There was an error adding the ebook!", error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="mb-4 text-2xl font-bold">Add Ebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Nama
          </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Deskripsi
          </label>
          <input
            type="text"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Kategori
          </label>
          <input
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            URL
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded shadow appearance-none"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Add Ebook
        </button>
      </form>
    </div>
  );
};

export default AddEbook;
