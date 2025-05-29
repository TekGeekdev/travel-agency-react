
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


const Button = ({text, onClick, color ='blue' }) => {
    const [selectColor, setSelectColor] = useState(`bg-blue-500 hover:bg-blue-600`)
    useEffect(()=>{
        if(color===`red`) setSelectColor(`bg-red-500 hover:bg-red-600`)
        if(color===`green`) setSelectColor(`bg-green-500 hover:bg-green-600`)
        if(color===`yellow`) setSelectColor(`bg-yellow-500 hover:bg-yellow-600`)
    },[selectColor])
    return (
        <button type='button'
        onClick={onClick}
        className={`${selectColor} text-white text-sm px-4 py-2 rounded-lg transition`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string
}

export default Button