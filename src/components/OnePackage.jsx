import Button from './Button';
const OnePackage = (onePackage) => {
    const onClick = () => {
        console.log('click component');
    };

    return (
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{onePackage.namePackage}</h2>
            <p className="text-gray-600 mb-4">{onePackage.description}</p>
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                    ${onePackage.price.toFixed(2)}
                </span>
                <span className="text-sm text-white bg-blue-500 px-3 py-1 rounded-full">
                    {onePackage.category}
                </span>
            </div>
            <div className="flex justify-end gap-2 mt-4">
                <Button text="Mise à jour" onClick={onClick} />
                <Button text="Supprimer" onClick={onClick} />
            </div>
        </div>
    );
}

export default OnePackage