import React from "react";
import axios from "axios";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function ProductView() {
  const { id } = useParams();
  const product = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img className="img-fluid" src={product.image} alt={product.name} />
          </div>
          <div className="col-8">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{product.price}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{product.description}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <button onClick={(e) => navigate(-1)}>back</button>
          </div>
        </div>
      </div>
    </div>
  );
}
