import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import Question from "./components/Question";
import Results from "./components/Results";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";

const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
  {
    question: "Choose a pet:",
    options: ["Dog 🐶", "Cat 🐱", "Rabbit 🐰", "Bird 🐦"],
  },
  {
    question: "Pick a season:",
    options: ["Spring 🌸", "Summer ☀️", "Autumn 🍂", "Winter ❄️"],
  },
];

const keywords = {
  Fire: "fire",
  Water: "water",
  Earth: "earth",
  Air: "air",
};

const elements = {
  "Red 🔴": "Fire",
  "Blue 🔵": "Water",
  "Green 🟢": "Earth",
  "Yellow 🟡": "Air",
  "Dog 🐶": "Earth",
  "Cat 🐱": "Water",
  "Rabbit 🐰": "Air",
  "Bird 🐦": "Fire",
  "Spring 🌸": "Air",
  "Summer ☀️": "Fire",
  "Autumn 🍂": "Earth",
  "Winter ❄️": "Water",
};

const quoteTags = {
  Fire: "war",
  Water: "tranquil",
  Air: "whimsy",
  Earth: "courage",
};

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);
  const [quote, setQuote] = useState({ content: "", author: "" });

  function handleAnswer(option) {
    setAnswers([...answers, option]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function determineElement(answers) {
    const counts = {};
    answers.forEach((answer) => {
      const elem = elements[answer];
      counts[elem] = (counts[elem] || 0) + 1;
    });
    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  }

async function fetchArtwork(keyword) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}&per_page=1`
    );
    const data = await response.json(); 
    if (data && data.results && data.results.length > 0) {
      const photo = data.results[0];
      setArtwork({
        primaryImage: photo.urls.regular,
        title: photo.description || photo.alt_description || "Artwork",
        artistDisplayName: photo.user.name,
        objectDate: photo.created_at ? photo.created_at.slice(0, 10) : "",
      });
    } else {
      setArtwork(null);
    }
  } catch (error) {
    console.error("Error fetching artwork:", error);
    setArtwork(null);
  }
}


  async function fetchQuote(element) {
    const tag = quoteTags[element] || "inspirational";
    try {
      const res = await fetch(`https://api.quotable.io/random?tags=${tag}`);
      const data = await res.json();
      if (data && data.content) {
        setQuote({ content: data.content, author: data.author });
      } else {
        setQuote({ content: "Stay inspired!", author: "Unknown" });
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({ content: "Stay inspired!", author: "Unknown" });
    }
  }

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);
      fetchArtwork(keywords[selectedElement]);
      fetchQuote(selectedElement);
    }
  }, [currentQuestionIndex]);

  return (
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route
          path="/quiz"
          element={
            currentQuestionIndex < questions.length ? (
              <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
              />
            ) : (
              <Results element={element} artwork={artwork} quote={quote} />
            )
          }
        />
      </Routes>
    </UserProvider>
  );
}
