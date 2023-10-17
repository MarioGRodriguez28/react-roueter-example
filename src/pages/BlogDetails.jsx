import {Link, useParams} from "react-router-dom";
import {useFetch} from "../hook/useFetch";

const BlogDetails = () => {
  const params = useParams();

  const {data, loading, error} = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>loading Data...</p>;
  if (error) return <p> error...</p>;

  return (
    <>
      <h1>
        {data.id} - {data.title}{" "}
      </h1>
      <p>{data.body} </p>
      <Link to="/blog" className="btn btn-dark"> Volver al Blog</Link>
    </>
  );
};
export default BlogDetails;
