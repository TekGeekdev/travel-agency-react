import PropTypes from 'prop-types'

const Button = ({text, onClick }) => {
    return (
        <button 
        onClick={onClick}
        className='bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg transition'>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button