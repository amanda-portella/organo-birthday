import CardGuest from '../CardGuest';
import './Groups.css';

const Groups = (props) => {
  const backgroundColor = {backgroundColor: props.secondaryColor}
  const borderColor = {borderColor: props.primaryColor}

  return (
    (props.guests.length > 0) ? <section className='groups' style={backgroundColor}>
      <div className='groupsHeader'>
        <h3 style={borderColor}>{props.group}</h3>
      </div>
      <div className='cards'>
        {props.guests.map(guest => <CardGuest 
          key={guest.name}
          name={guest.name} 
          age={guest.age} 
          primaryColor={props.primaryColor}
        />)}
      </div>
    </section>
    : <></>
  )
}

export default Groups;