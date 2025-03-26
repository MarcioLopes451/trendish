import { Link } from "react-router-dom";

function NoPageFound() {
  return (
    <section className="">
      Page not found
      <Link to={"/"} className="block ">
        <button className="bg-amber-400 rounded-3xl p-4">
          Click to Go to homepage
        </button>
      </Link>
    </section>
  );
}

export default NoPageFound;
