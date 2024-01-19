
import React, { useEffect } from 'react';

export const Sign = () => {
    useEffect(() => {
        const AnswerButton = document.getElementById('Answer');
        const QuestButton = document.getElementById('Quest');
        const container = document.getElementById('container');
    
        const handleAnswer = () => {
          container.classList.add('right-panel-active');
        };
    
        const handleQuest = () => {
          container.classList.remove('right-panel-active');
        };
    
        AnswerButton.addEventListener('click', handleAnswer);
        QuestButton.addEventListener('click', handleQuest);
    
        
        return () => {
         AnswerButton.removeEventListener('click', handleAnswer);
         QuestButton.removeEventListener('click', handleQuest);
        };
      }, []);
    
      return (
        <div id="container">
         
        </div>
      );
    };