import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./Plans.css";

export default function Plans() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapShot) => {
        const products = {};
        querySnapShot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  return (
    <div className="plans">
      {/* map is a method to be use in arrays - thats the way you can map with objects */}
      {Object.entries(products).map(([ productId, productData ]) => {
        return (
          <div className="eachPlan" key={productId}>
            <div className="planInfo">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>
            <button>Subscribe</button>
          </div>
        );
      })}
    </div>
  );
}
