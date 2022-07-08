import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [jenis_desain, setjenis_desain] = useState("");
  const [harga, setharga] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/jasa/${id}`, {
        name,
        jenis_desain,
        harga,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/jasa/${id}`);
    setName(response.data.name);
    setjenis_desain(response.data.jenis_desain);
    setharga(response.data.harga);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">jenis_desain</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jenis_desain}
                onChange={(e) => setjenis_desain(e.target.value)}
                placeholder="jenis_desain"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">harga</label>
            <div className="control">
            <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setharga(e.target.value)}
                placeholder="harga"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
