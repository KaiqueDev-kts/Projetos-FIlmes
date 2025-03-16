import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Filme() {
  const { id } = useParams()

    return (
        <div>
           <h1>vc esta em filmes {id}</h1>  
        </div>
       
    )
}