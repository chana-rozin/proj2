import React, { useEffect, useState } from 'react'
import style from './Electronics.module.css'
import ProdArea from '../ProdArea/ProdArea';
import { getElectronics } from '../../service/store';

function Electronics() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getElectronics().then(data => setProducts(data));
  }, []);
  return (
    <ProdArea products={products} />
  )
}

export default Electronics