import React, { useState } from 'react';
import Input from '../../components/Input'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './page.module.css'; 

const AddImmobilisation = () => {
    const navigate = useNavigate();
    const [nom, setNom] = useState('');

    const click = async () => {
        try {
            await axios.post('http://localhost:8080/immobilisations', {
            nom: nom,
            }, {
                headers: {
                  'Content-Type': 'application/json',
                }
            });
            toast.success("Tsara be ny forin Layah")
            navigate('/')

        } catch (error) {
            console.error('Erreur lors de la requête API:', error);
        }
    };

    return (
        <div>
            <ToastContainer/>
            <div className={styles.simpleform} >
                <label className={styles.formlabel}>
                    Ajouter une Immobilisation
                    </label>
                    <div className={styles.input}><Input id={"input"} label={"Ajout immobilisation"} type={"text"} variant={"outlined"} width={"300px"}  onChange={(e) => setNom(e.target.value)}/></div>
                <button type="submit" className={styles.formboutton} onClick={click}>Envoyer</button>
            </div>
        </div>

  );
};

export default AddImmobilisation;
