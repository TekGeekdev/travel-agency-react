
import Button from './Button';
import OnePackage from './OnePackage';

const Packages = ({listPackage, onDelete}) => {

    const onClick = () => {
        console.log('click component');
    };

    return (
        <div className="p-6">
            <div className="flex justify-end mb-6">
                <Button text="Ajouter un forfait" onClick={onClick} className="bg-blue-500"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {listPackage.map((onePackage) => (
                    <OnePackage key={onePackage.id} onePackage={onePackage} onDelete={onDelete}/>
                ))}
            </div>
        </div>
    );
};


export default Packages;