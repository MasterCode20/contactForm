import React from 'react';
import ContactForm from './ContactForm';
import { Analytics } from '@vercel/analytics/react';
import './ContactForm';

function App() {
  return (
    <div className="App">
      <ContactForm />
      <Analytics />
    </div>
  );
}
export default App;