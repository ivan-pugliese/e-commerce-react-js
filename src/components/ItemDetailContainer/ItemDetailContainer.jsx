import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { iditem } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", iditem);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [iditem]);

  return (
    <div className="ItemDetailContainer">
      <div className="Star-icons">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <ItemDetail data={data} alt={data.name} />
      <Link to="/">
        <button className="Continue">Seguir comprando</button>
      </Link>
    </div>
  );
};

export default ItemDetailContainer;
