import React, { useState } from 'react';
import './ProductSection.css';

const productsData = [
  {
    id: 1,
    title: 'Squirtle',
    description: 'Pokemon tipo: Agua',
    imageUrl: 'images/img1.png',
  },
  {
    id: 2,
    title: 'Charmander',
    description: 'Pokemon tipo: Fuego',
    imageUrl: 'images/img2.png',
  },
  {
    id: 3,
    title: 'Bulbasur',
    description: 'Pokemon tipo: Planta/Veneno',
    imageUrl: 'images/img3.png',
  },
];

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
// Haga click en el nombre del Pokemon y Saldra lo solicitado
  const handleTitleClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section>
      {productsData.map((product) => (
        <div>
          <img src={product.imageUrl} alt={product.title} />
          <h3 onClick={() => handleTitleClick(product)}>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={closeModal}>&times;</span>
            <h2>{selectedProduct.title}</h2>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
