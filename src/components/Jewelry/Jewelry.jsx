import React, { useEffect, useState } from 'react'
import style from './Jewelry.module.css'
import ProdArea from '../ProdArea/ProdArea';
import { getJewelry } from '../../service/store';

function Jewelry() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getJewelry().then(data=>setProducts(data));
  }, []);
  return (
    <ProdArea products={products} />
  )
}

export default Jewelry