import PropTypes from 'prop-types';
 
    const cardStyle = { 
        border: '4px solid white', 
        padding: '10px', 
        margin: '10px 0',
      };



const Card = ({ name, apellido }) => {
    return (
        <div style={cardStyle}>
            <h2>El nombre del usuario es:</h2>
            <h4>{name}</h4>
            <h4>{apellido}</h4>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
};

export default Card