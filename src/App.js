import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Groups from "./components/Groups";
import Footer from "./components/Footer";

function App() {

  const [guests, setGuests] = useState([]);
  const groups = [
    {id: 0, group: "Escolha um grupo..."},
    {id: 1, group: "Aniversariante", primaryColor: "#00C1D4", secondaryColor: "#CCF0F3"},
    {id: 2, group: "Família", primaryColor: "#DC6EBE", secondaryColor: "#F5D3EC"},
    {id: 3, group: "Amigos", primaryColor: "#A6D157", secondaryColor: "#E7F3D1"},
  ]

  const onSaveGuest = (guest) => {
    setGuests([...guests, guest])
  }

  return (
    <div className="App">
      <Banner />
      <Form 
        groups={groups.map(group => {
          return {id: group.id, grupo: group.group}
        })}
        onSaveGuest={onSaveGuest}
      />
      {groups.map(group => {
        if(group.id === 0) {
          return false
        } else {
          return <Groups 
            key={group.id} 
            group={group.group} 
            primaryColor={group.primaryColor} 
            secondaryColor={group.secondaryColor}
            guests={guests.filter(guest => guest.group === group.group)}
          />
        }
      }
      )}
      <Footer/>
    </div>
  );
}

export default App;
