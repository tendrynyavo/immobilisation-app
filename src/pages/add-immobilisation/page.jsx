import React, { useState } from 'react';
import Input from '../../components/Input'

import styles from './page.module.css'; 

const AddImmobilisation = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valeur du champ:', inputValue);
  };

  return (
    <form className={styles.simpleform} onSubmit={handleSubmit}>
      <label className={styles.formlabel}>
        Ajouter une Immobilisation
        </label>
        <div className={styles.input}><Input id={"input"} label={"Ajout immobilisation"} type={"email"} variant={"outlined"} width={"300px"}  onChange={handleInputChange}/></div>
      <button type="submit" className={styles.formboutton}>Envoyer</button>
    </form>
  );
};

export default AddImmobilisation;
