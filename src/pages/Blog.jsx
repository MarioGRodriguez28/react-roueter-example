import {Link, useSearchParams} from "react-router-dom";
import {useFetch} from "../hook/useFetch";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {data, loading, error} = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>loading Data...</p>;
  if (error) return <p> error..</p>;

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({filter});
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h1>Blog</h1>

      <input
        className="form-control my-3"
        type="text"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />

      <ul className="list-group">
        {data
          .filter((item) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = item.title.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="list-group-item">
              {item.id} - {item.title}{" "}
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Blog;
