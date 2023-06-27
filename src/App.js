import './App.css';
import contac from "./contacts.json";
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contac);
  // let Arr = contacts.slice(0, 5);
  const [firstFiveActors, setfirstFiveActors] = useState(contacts.slice(0, 5))

  // const AddRandomContact = () => {
  //   const randomPosition = Math.round(Math.random() + contac.length);
  //   const randomActor = contac[randomPosition];
  //   contacts.map((contact) => {
  //     let addContact;
  //     if (randomActor.id != contact.id) {
  //       addContact = [...contacts, randomActor]
  //       setContacts(addContact)
  //     }
  //   })

  // }



  const sortByPopularity = () => {


    contacts.popularity.sort((a, b) => a - b)

  };
  const sortByAlfabeticOrder = () => contacts.name.sort((a, b) => a - b);

  const AddAllActors = ActorId => {
    const filteredActors = contacts.filter(actor => {
      return actor.id !== ActorId;

    })
    setfirstFiveActors(filteredActors)

    // const randomPosition = Math.round(Math.random() + contac.length);
    // const randomActor = contac[randomPosition];

  }
  const deleteActor=ActorId=>{
    const delActor=firstFiveActors.filter(actor=>{
      return actor.id !==ActorId;
    })
    setfirstFiveActors(delActor)
  }



  return (
    <div className="App">


      <div className="responsiveButtons">

        <button onClick={AddAllActors}>Add Random Contact</button>
        <button onClick={sortByAlfabeticOrder}>Sort by A-Z</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <table>
        <tr class="tableHeader">
          <th> Picture </th>
          <th> Name </th>
          <th> Popularity</th>
          <th> Won an Oscar</th>
          <th> Won an Emmy</th>
        </tr>
        <p>{console.log(firstFiveActors)}</p>
        <tr className="artistsTable">
          {firstFiveActors.map((contact) => {
            return (

              <tr key={contact.id} class="output">
                <td> <img src={contact.pictureUrl} class="image" /></td>
                <td class="actorName"> {contact.name} </td>
                <td class="actorPopularity"> {(contact.popularity.toFixed(2))} </td>
                <td class="imageOfOscar">{(contact.wonOscar) ? <img class="imageOfNomination" src="https://static8.depositphotos.com/1050284/850/i/950/depositphotos_8505454-stock-photo-oscar-isolated.jpg" /> : <img class="imageOfNomination" src="https://e7.pngegg.com/pngimages/862/977/png-clipart-unlike-illustration-brazil-meme-estranho-negativo-text-hand.png" />} </td>
                <td class="imageOfEmmy">{(contact.wonEmmy) ? <img class="imageOfNomination" src="https://cdnb.20m.es/sites/76/2016/09/Por-qu%C3%A9-los-premios-Emmy-se-llaman-as%C3%AD.jpg" /> : <img class="imageOfNomination" src="https://e7.pngegg.com/pngimages/862/977/png-clipart-unlike-illustration-brazil-meme-estranho-negativo-text-hand.png" />} </td>
                <td><button onClick={deleteActor}> Delete Actor</button></td>
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
