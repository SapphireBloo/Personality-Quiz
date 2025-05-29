import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';


export default function UserForm() {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputName.trim()) return;
    setName(inputName.trim());
    navigate('/quiz');
  }

   return (
    <div className="page-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name to begin:</label>
        <input
          type="text"
          id="name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}
