import React, { useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppoinments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (contactName, phone, email) => {
    setContacts ([...contacts, {
      contactName: contactName,
      phone: phone,
      email: email
    }])
  }

  const addAppoinment = (title, contact, date, time) => {
    setAppoinments ([...appointments, {
      title: title,
      contact: contact,
      date: date,
      time: time
    }])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} addAppoinment={addAppoinment} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
