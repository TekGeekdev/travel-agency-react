import { useState } from "react";

const AddPackage = ({onAdd}) => {
    const [namePackage, setNamePackage] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const onSubmit = (sendForm) =>{
        sendForm.preventDefault()
        
        onAdd({namePackage, description, price: parseFloat(price), category})
        setNamePackage('')
        setDescription('')
        setPrice('')
        setCategory('')
    }

    return(
       <form className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-16" onSubmit={onSubmit}>
            <div className="form-control">
                <label className="block text-gray-700 font-medium mb-1">Nom du forfait</label>
                <input
                    type="text"
                    placeholder="Écrire un nom de forfait"
                    value={namePackage}
                    onChange={(e) => setNamePackage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="form-control">
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <input
                    type="text"
                    placeholder="Écrire une description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="form-control">
                <label className="block text-gray-700 font-medium mb-1">Prix</label>
                <input
                    type="number"
                    placeholder="Écrire un prix"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="form-control">
                <label className="block text-gray-700 font-medium mb-1">Categorie</label>
                <input
                    type="text"
                    placeholder="Écrire une categorie"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <input
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                value="Ajouter Forfait"
            />
        </form> 
    );
}

export default AddPackage