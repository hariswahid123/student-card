
import './App.css';
import { useState } from 'react';
import StudentCard from './components/Student-Card';

function App() {
  const [theme, setTheme] = useState('light');

  const students = [
    { name: 'Adil', rollNumber: '804', batch: '13', favoriteLanguage: 'JavaScript' },
    { name: 'Jawad', rollNumber: '102', batch: '16', favoriteLanguage: 'Python' },
    { name: 'Sheharyar', rollNumber: '205', batch: '18', favoriteLanguage: 'Java' },
  ];

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={toggleTheme} 
        style={{ marginBottom: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            rollNumber={student.rollNumber}
            batch={student.batch}
            favoriteLanguage={student.favoriteLanguage}
            theme={theme} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;