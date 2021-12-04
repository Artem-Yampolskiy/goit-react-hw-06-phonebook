import Container from './Components/Container';
import Form from './Components/Form';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

