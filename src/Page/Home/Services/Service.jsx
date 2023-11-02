import { Link } from "react-router-dom";




const Service = ({ service }) => {
    const { _id, title, price, img } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl object-cover h-56 w-full   "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions">
        </div>
        <Link to={`/checkout/${_id}`}>
        <button className="btn btn-sm bg-orange-500">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
