import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [jenis_desain, setjenis_desain] = useState("");
  const [harga, setharga] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/jasa", {
        name,
        jenis_desain,
        harga,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
