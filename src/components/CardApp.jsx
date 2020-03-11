import React from "react";
import Card from "./Card";
import contacts from "./contacts";


// create a function call it createCard put contact within parentices
// this will call all elements in contacts file Array  We can choose 
//what elements to render by contact.name in curley brackets because 
// its javascriot 

// key very important when dealing with arrays key must be 
//defined as unique key = {contact.id} However if you want to render id
// no you need to define as id = {contact.id} see bottom of Card.js

function createCard(contact){
return (<Card 
id = {contact.id}
key = {contact.id}
name = {contact.name}
img = {contact.imgURL}
tel = {contact.phone}
email = {contact.email}

/>

);

}


// note relationship the above funtion is passed 
// in app using the map  method {contacts.map(createCard)}
//see below
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
