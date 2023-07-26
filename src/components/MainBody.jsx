import React from 'react';
import './MainBody.css';

const MainBody = () => {
  const handleTitleClick = () => {
    alert('Estos son nuestros productos principales');
  };

  return (
    <main>
      <h2 onClick={handleTitleClick}>Productos Principales (haz click aca)</h2>
      <p>Presentacion principal de los productos de la aplicación EVA_4</p>
      <ul>
        <li>Squirtle</li>
        <p>	Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.</p>
        <li>Charmander</li>
        <p>Prefiere los sitios calientes. Dicen que cuando llueve sale vapor de la punta de su cola.</p>
        <li>Bulbasaur</li>
        <p>Una rara semilla fue plantada en su espalda al nacer. La planta brota y crece con este Pokémon.</p>
      </ul>
    </main>
  );
};

export default MainBody;
