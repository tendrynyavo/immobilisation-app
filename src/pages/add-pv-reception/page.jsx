import React, { useState, useEffect } from 'react';
import Input from '../../components/Input'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import MySelectComponent from '../../components/Select';
import 'react-toastify/dist/ReactToastify.css';

import styles from './page.module.css'; 

const AddPvReception = () => {
    const navigate = useNavigate();
    

    const [immobilisations, setImmobilisations] = useState([]);
    const [livreurs , setLivreurs] = useState([]);
    const [marques , setMarques] = useState([]);


    const [selectedImmobilisation, setSelectedImmobilisation]= useState(null)
    const [selectedLivreur, setSelectedLivreur]= useState(null)
    const [selectedMarque, setSelectedMarque]= useState(null)


    
    useEffect(() => {
        axios.get('http://localhost:8080/immobilisations')
          .then(response => setImmobilisations(response.data))
          .catch(error => console.error('Erreur lors de la récupération des bouquets', error));
      }, []);

      useEffect(() => {
        axios.get('http://localhost:8080/marques')
          .then(response => setMarques(response.data))
          .catch(error => console.error('Erreur lors de la récupération des bouquets', error));
      }, []);


      useEffect(() => {
        axios.get('http://localhost:8080/livreurs')
          .then(response => setLivreurs(response.data))
          .catch(error => console.error('Erreur lors de la récupération des bouquets', error));
      }, []);

    const click = async () => {

    };

    const handleMarqueChange = (selectedMarque) => {
        setSelectedMarque(selectedMarque);
      };
    const handleLivreurChange = (selectedLivreur) => {
        setSelectedLivreur(selectedLivreur);
      };
    const handleImmoChange = (selectedImmobilisation) => {
        setSelectedImmobilisation(selectedImmobilisation);
      };

    return (
        <div>
            <ToastContainer/>
            <div className={styles.simpleform} >
                <label className={styles.formlabel}>
                    Ajouter une Kitchen
                    </label>
                    <div className={styles.input}>
                        <MySelectComponent
                            label="Immobilisation"
                            width="300px"
                            options={immobilisations.map(immobilisation => ({
                            value: immobilisation,
                            label: immobilisation.nom,
                            test: immobilisation.id
                            }))}
                            onChange={handleImmoChange}
                            selectedValue={selectedImmobilisation}
                         />
                    </div>
                    <div className={styles.selected}>
                        <div className={styles.input}>
                            <MySelectComponent
                                label="Livreur"
                                width="300px"
                                options={livreurs.map(livreur => ({
                                value: livreur,
                                label: livreur.nom,
                                test: livreur.id
                                }))}
                                onChange={handleLivreurChange}
                                selectedValue={selectedLivreur}
                            />
                        </div>
                        <div className={styles.input}>
                            <MySelectComponent
                                label="Recepteur"
                                width="300px"
                                options={livreurs.map(livreur => ({
                                value: livreur,
                                label: livreur.nom,
                                test: livreur.id
                                }))}
                                onChange={handleLivreurChange}
                                selectedValue={selectedLivreur}
                            />
                        </div>
                    </div>
                    <div className={styles.selected} >
                        <div className={styles.input}>
                            <MySelectComponent
                                label="Marque"
                                width="300px"
                                options={marques.map(marque => ({
                                value: marque,
                                label: marque.nom,
                                test: marque.id
                                }))}
                                onChange={handleMarqueChange}
                                selectedValue={selectedMarque}
                            />
                        </div>
                        <div className={styles.input}>
                            <MySelectComponent
                                label="Etat"
                                width="300px"
                                options={marques.map(marque => ({
                                value: marque,
                                label: marque.nom,
                                test: marque.id
                                }))}
                                onChange={handleLivreurChange}
                                selectedValue={selectedLivreur}
                            />
                        </div>
                    </div>

                    <div className={styles.input}>
                        <MySelectComponent
                            label="Marque"
                            width="300px"
                            options={marques.map(marque => ({
                            value: marque,
                            label: marque.nom,
                            test: marque.id
                            }))}
                            onChange={handleLivreurChange}
                            selectedValue={selectedLivreur}
                         />
                    </div>
                    <div className={styles.input}><Input id={"input2"} label={"Date"} type={"date"} variant={"outlined"} width={"300px"}  /></div>
                    <div className={styles.input}><Input id={"input3"} label={"Valeur"} type={"number"} variant={"outlined"} width={"300px"}  /></div>
                    <div className={styles.input}><Input id={"input4"} label={"Designation"} type={"text"} variant={"outlined"} width={"300px"}  /></div>
                    <div className={styles.erorr}>
                        <button type="submit" className={styles.formboutton} onClick={click}>Envoyer</button>
                    </div>

            </div>
        </div>

  );
};

export default AddPvReception;
