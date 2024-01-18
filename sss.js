// ChildComponent.jsx
import React from 'react';

const ChildComponent = ({ onDataToParent }) => {
  const handleClick = () => {
    // Simulation de données générées par l'enfant
    const data = 'Données de l\'enfant!';
    
    // Appel de la fonction de rappel onDataToParent du parent
    onDataToParent(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Envoyer des données au Parent</button>
    </div>
  );
};

export default ChildComponent;
jsx
Copy code
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  // Fonction de rappel pour recevoir des données de l'enfant
  const handleDataFromChild = (data) => {
    alert(`Données reçues du Child : ${data}`);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passage de la fonction de rappel onDataToParent en tant que prop */}
      <ChildComponent onDataToParent={handleDataFromChild} />
    </div>
  );
};
