import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBook = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [mualliflar, setMualliflar] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthors] = useState("");
  const [category, setCategory] = useState("");
  const [publishedYear, setYear] = useState("");
  const [summary, setSumarry] = useState("");

  //submit the htmlForm
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/books", {
        title,
        author,
        category,
        publishedYear,
        summary,
      });
      if (data.success === true) {
        setTitle("");
        setAuthors("");
        setCategory("");
        setYear("");
        setSumarry("");
        toast.success(data.message);
        navigate("/kitoblar");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ****************
  useEffect(() => {
    getCategory();
    getAuthors();
  }, []);

  const getCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/categories");
      setCategories(data.categories);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
  const getAuthors = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/authors");
      setMualliflar(data.mualliflar);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  return (
    <>
      <div className="max-w-lg lg:ms-auto mx-auto text-center ">
        <div className="py-16 px-7 rounded-md bg-white">
          <form className="" onSubmit={submitForm}>
            <div className="grid w-full grid-cols-1 gap-6">
              {/* <input type="text" id="title" name="title" placeholder="title *" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 "/> */}

              <div className="md:col-span-2">
                <input
                  type="text"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Kitob titlelini yozing..."
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                />
              </div>
              <div className="md:col-span-2">
                <select
                  id="subject"
                  onChange={(e) => setAuthors(e.target.value)}
                  value={author}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                >
                  <option value="">Kitob muallifini tanlang</option>
                  {mualliflar.map((mualliflar) => (
                    <option key={mualliflar._id} value={mualliflar._id}>
                      {mualliflar.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <select
                  id="subject"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                >
                  <option value="">Kitob categoriyasini tanlang</option>
                  {categories &&
                    categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  onChange={(e) => setYear(e.target.value)}
                  value={publishedYear}
                  id="publishedYear"
                  placeholder="Kitob yilini yozing..."
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  type="text"
                  rows="5"
                  onChange={(e) => setSumarry(e.target.value)}
                  value={summary}
                  cols=""
                  placeholder="Qisqacha tavsifi *"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="py-3 text-base font-medium rounded text-white bg-blue-800 w-full hover:bg-blue-700 transition duration-300"
                >
                  Add Book +
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddBook;
