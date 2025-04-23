// src/components/ChatBot.js

import React, { useState } from 'react';

const ChatBot = () => {
  // State für die Anzeige der Optionen und Antworten
  const [isOpen, setIsOpen] = useState(false);  // Ob der Chat geöffnet ist
  const [answer, setAnswer] = useState(null);   // Die Antwort, die angezeigt wird

  // Fragen und ihre Antworten
  const questions = [
    { id: 1, question: 'Was ist ein IT-Terminbuchungssystem?', answer: 'Ein IT-Terminbuchungssystem ist eine Plattform, auf der Benutzer IT-Support-Termine buchen können.' },
    { id: 2, question: 'Wie kann ich einen Termin buchen?', answer: 'Klicke auf das Formular, um einen Termin zu erstellen, indem du dein gewünschtes Datum, Uhrzeit und Beschreibung eingibst.' },
    { id: 3, question: 'Was passiert, wenn ich einen Termin verpasst habe?', answer: 'Falls du einen Termin verpasst hast, kannst du einen neuen Termin buchen, um den Support zu erhalten.' }
  ];

  // Funktion, um den Chat zu öffnen oder zu schließen
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setAnswer(null);  // Wenn der Chat geöffnet wird, lösche die Antwort
  };

  // Funktion, die die Antwort für eine Frage anzeigt
  const handleQuestionClick = (questionId) => {
    const selectedQuestion = questions.find(q => q.id === questionId);
    setAnswer(selectedQuestion.answer);
  };

  return (
    <div>
      {/* Chat-Symbol */}
      <button onClick={toggleChat} className="chat-button">
        💬
      </button>

      {/* Chatbot Fenster */}
      {isOpen && (
        <div className="chat-window">
          <h3>Chatbot</h3>
          {answer ? (
            <p>{answer}</p>
          ) : (
            <div>
              <p>Wählen Sie eine Frage:</p>
              <ul>
                {questions.map(q => (
                  <li key={q.id}>
                    <button onClick={() => handleQuestionClick(q.id)}>
                      {q.question}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
