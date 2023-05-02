import './CardGuest.css';

const CardGuest = ({name, age, id, primaryColor, removeGuest}) => {

  const headerColor = {backgroundColor: primaryColor}

  return (
    <div className='cardGuest'>
      <button onClick={() => removeGuest(id)}>
        X
      </button>
      <div className='cardHeader' style={headerColor}>
        <img src="/images/profile.png" alt='Representação de uma pessoa'/>
      </div>
      <div className='cardText'>
        <h4>{name}</h4>
        <h5>{`${age} ano(s)`}</h5>
      </div>
    </div>
  )
}

export default CardGuest;