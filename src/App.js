import './App.css';
import contac from "./contacts.json";
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contac);

  // const firstFiveActor = contacts.slice(0, 5);

  const [firstFiveActors, setfirstFiveActors] = useState(contacts.slice(0, 5))




  // const sortByPopularity = () => {


  //   firstFiveActors.popularity.sort()

  // };
  // const sortByAlfabeticOrder = () => { (firstFiveActors.sort((a, b) => a - b)) };

  const AddAllActors = ActorId => {
    // (randomActor.id != Actor.id)
    const filteredActors = contacts.filter(actor => {
      return actor.id !== ActorId;


    })
    setfirstFiveActors(filteredActors)

    // const randomPosition = Math.round(Math.random() + contac.length);
    // const randomActor = contacts[randomPosition];

  }

  const deleteActor2 = ActorID => {
    const delActor2 = firstFiveActors.filter(actor => {
      return actor.id !== ActorID;
    })
    setfirstFiveActors(delActor2)
  }
  const ArraysortedbyAlphabeticOrder = () => {
    const ordered = firstFiveActors.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;

      } return 0

    })
    setContacts(ordered)
  };

  const ArraysortedbyPopularity = () => {
    const orderedbyPopularity = firstFiveActors.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;

      } return 0

    })
    console.log(orderedbyPopularity);
    setContacts(orderedbyPopularity)
  };


  return (
    <div className="App">


      <div className="responsiveButtons">


        <button class="responsivebtn" onClick={() => AddAllActors(contacts.name)}>Add All Actors</button>
        <button class="responsivebtn" onClick={() => ArraysortedbyAlphabeticOrder()}>Sort by A-Z</button>
        <button class="responsivebtn" onClick={() => ArraysortedbyPopularity()}>Sort by Popularity</button>
      </div>
      <table class="tableStyling">
        <tr class="tableHeader">
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity</th>
          <th> Won an Oscar</th>
          <th> Won an Emmy</th>
          <th> Delete</th>
        </tr>
        <p>{console.log(firstFiveActors)}</p>
        <tr className="artistsTable">
          {firstFiveActors.map((contact) => {
            return (

              <tr key={contact.id} class="output">
                <td> <img src={contact.pictureUrl} class="image" /></td>
                <td class="actorName"> {contact.name} </td>
                <td class="actorPopularity"> {(contact.popularity.toFixed(2))} </td>
                <td class="imageOfOscar">{(contact.wonOscar) ? <img class="imageOfNomination" src="https://static8.depositphotos.com/1050284/850/i/950/depositphotos_8505454-stock-photo-oscar-isolated.jpg" /> : ""} </td>
                <td class="imageOfEmmy">{(contact.wonEmmy) ? <img class="imageOfNomination" src="https://cdnb.20m.es/sites/76/2016/09/Por-qu%C3%A9-los-premios-Emmy-se-llaman-as%C3%AD.jpg" /> : ""} </td>
                <td><button className="delete-btn" onClick={() => deleteActor2(contact.id)}> Delete Actor</button></td>
              </tr>

            )
          })


          }
        </tr>

      </table>

    </div>
  );
}

export default App;
