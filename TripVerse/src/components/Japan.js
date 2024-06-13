import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { japanPage } from "../data";
import Japan from "../assets/Japan.png";

const Template = () => {
  return (
    <>
      <div className="vh-100" style={{ position: "relative" }}>
        <h1 className="text-white position-absolute top-50 start-50 translate-middle" style={{ fontSize: 130 }}>Japan</h1>
        <img src={Japan} className="object-fit-cover" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="d-flex flex-column align-items-center row-gap-4" style={{ backgroundColor: '#2F434A', paddingTop: 50 }}>
        {japanPage.map((japan) => (
          <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <Link to={"/"+japan.link} style={{ textDecoration: 'none' }}>
              <div className="card mb-3" style={{ maxWidth: 900, backgroundColor: '#384040' }}>
                <div className="row g-0" style={{ height: 300 }}>
                  <div className="col-4" style={{ height: "100%" }}>
                    <img src={japan.image} style={{ height: "100%", width: 270 }} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h4 className="card-title text-white" style={{ marginTop: 10, marginBottom: 30 }}>{japan.name}</h4>
                      <p className="card-text text-white">{japan.description}</p>
                      <button variant="primary" className='text-center text-white' style={{ backgroundColor: '#FF3D00', borderRadius: 7, fontSize: 15, padding: "0 20 0 20", marginTop: 30 }}>Watch</button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Template;