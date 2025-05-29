import { useState, useEffect } from 'react';
import Header from './components/Header';
import Packages from './components/Packages';
import AddPackage from './components/AddPackage';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

//   const [listPackage, setPackages] = useState([
//     {
//         "id": 1,
//         "namePackage": "Séjour à Paris",
//         "description": "Séjour pour 2 personnes en plein Paris",
//         "price": 250.00,
//         "category": "Romantic"
//     },
//     {
//         "id": 2,
//         "namePackage": "Aventure dans les Alpes",
//         "description": "Randonnée guidée et nuit en refuge",
//         "price": 180.00,
//         "category": "Adventure"
//     },
//     {
//         "id": 3,
//         "namePackage": "Spa détente à Montréal",
//         "description": "Accès spa nordique et massage pour deux",
//         "price": 220.00,
//         "category": "Relaxation"
//     },
//     {
//         "id": 4,
//         "namePackage": "Week-end gastronomique à Lyon",
//         "description": "2 nuits et dégustation dans un restaurant étoilé",
//         "price": 300.00,
//         "category": "Gastronomy"
//     },
//     {
//         "id": 5,
//         "namePackage": "Séjour au bord de la mer",
//         "description": "3 jours dans un hôtel avec vue sur l’océan",
//         "price": 270.00,
//         "category": "Beach"
//     },
//     {
//         "id": 6,
//         "namePackage": "Forfait Safari en Afrique",
//         "description": "3 jours de safari avec guide privé",
//         "price": 1200.00,
//         "category": "Adventure"
//     },
//     {
//         "id": 7,
//         "namePackage": "Croisière dans les Caraïbes",
//         "description": "Croisière de 7 jours tout inclus",
//         "price": 900.00,
//         "category": "Cruise"
//     },
//     {
//         "id": 8,
//         "namePackage": "Escapade romantique à Venise",
//         "description": "Séjour romantique avec promenade en gondole",
//         "price": 450.00,
//         "category": "Romantic"
//     },
//     {
//         "id": 9,
//         "namePackage": "Séjour ski dans les Laurentides",
//         "description": "2 jours de ski + hébergement",
//         "price": 310.00,
//         "category": "Adventure"
//     },
//     {
//         "id": 10,
//         "namePackage": "Forfait bien-être en campagne",
//         "description": "Massage, yoga et détente à la campagne",
//         "price": 195.00,
//         "category": "Relaxation"
//     },
//     {
//         "id": 11,
//         "namePackage": "Visite culturelle à Rome",
//         "description": "Visites guidées et accès aux musées",
//         "price": 400.00,
//         "category": "Culture"
//     },
//     {
//         "id": 12,
//         "namePackage": "Weekend en cabane dans les bois",
//         "description": "2 nuits dans une cabane rustique",
//         "price": 160.00,
//         "category": "Nature"
//     },
//     {
//         "id": 13,
//         "namePackage": "Expérience œnologique en Bourgogne",
//         "description": "Dégustation de vins et visite de vignobles",
//         "price": 350.00,
//         "category": "Gastronomy"
//     },
//     {
//         "id": 14,
//         "namePackage": "Aventure en kayak au Québec",
//         "description": "Journée guidée en kayak sur le fjord",
//         "price": 130.00,
//         "category": "Adventure"
//     },
//     {
//         "id": 15,
//         "namePackage": "Séjour zen au Japon",
//         "description": "3 nuits dans un ryokan avec onsen",
//         "price": 800.00,
//         "category": "Relaxation"
//     },
//     {
//         "id": 16,
//         "namePackage": "Week-end photo dans les Rocheuses",
//         "description": "Excursions avec un photographe professionnel",
//         "price": 280.00,
//         "category": "Nature"
//     },
//     {
//         "id": 17,
//         "namePackage": "Escapade urbaine à New York",
//         "description": "Hébergement et pass culturel 3 jours",
//         "price": 520.00,
//         "category": "City"
//     },
//     {
//         "id": 18,
//         "namePackage": "Découverte des châteaux de la Loire",
//         "description": "Visites guidées et hébergement charmant",
//         "price": 360.00,
//         "category": "Culture"
//     },
//     {
//         "id": 19,
//         "namePackage": "Voyage culinaire en Thaïlande",
//         "description": "Cours de cuisine et visites locales",
//         "price": 680.00,
//         "category": "Gastronomy"
//     },
//     {
//         "id": 20,
//         "namePackage": "Excursion en montgolfière",
//         "description": "Vol au lever du soleil avec déjeuner",
//         "price": 250.00,
//         "category": "Adventure"
//     }
// ]);

const [listPackage, setPackages] = useState([]);

useEffect(()=> {
  const getPackages = async () => {
    const packagesFromServer = await fetchPackages('http://localhost:5000/listPackage')
    setPackages(packagesFromServer)
  }
  getPackages()
}, [])

const fetchPackages = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}



const deletePackage = async (id) =>{
    await fetch(`http://localhost:5000/listPackage/${id}`,{
        method: 'DELETE'
    })
    setPackages(listPackage.filter((OnePackage)=>OnePackage.id !== id))
}

// method no server
// const addPackage=  (singlePackage) => {
//   const lastId = listPackage.length > 0 ? listPackage[listPackage.length - 1].id : 0
//   const id = lastId + 1
//   const newPackage = {id, ...singlePackage}
//   setPackages([...listPackage, newPackage])
// }

const addPackage= async (singlePackage) => {
    const res = await fetch('http://localhost:5000/listPackage',{
        method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(singlePackage)
    })
  const newPackage = await res.json() 
  setPackages([...listPackage, newPackage])
}

const [showAddPackage, setShowAddPackage] = useState(false)

  return (
    <BrowserRouter>
      <Header/>
      {showAddPackage && <AddPackage onAdd={addPackage} />}
      <Routes>
          <Route path='/' element={<Home setShowAddPackage={setShowAddPackage}/>}/>
          <Route path='/packages' element={<Packages listPackage={listPackage} onDelete={deletePackage} toggleForm={() => setShowAddPackage(!showAddPackage)} showAdd={showAddPackage}/>}/>
            <Route path='/about' element={<About setShowAddPackage={setShowAddPackage}/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
