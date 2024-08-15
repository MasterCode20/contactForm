import React from 'react';
import ContactForm from './ContactForm';
import { Analytics } from '@vercel/analytics/react';
import './ContactForm';

function App() {
  return (
    <div className="App">
      <h1>Contacter nous et recevez un Devis personnalisez!!</h1>
      <ContactForm />
      <Analytics />
    </div>
  );
}
export default App;