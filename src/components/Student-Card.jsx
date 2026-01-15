

const StudentCard = ({ name, rollNumber, batch, favoriteLanguage, theme }) => {
  const cardStyle = {
    backgroundColor: theme === 'dark' ? '#222' : '#f9f9f9',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: theme === 'dark' ? '0 0 10px #000' : '0 0 10px #ccc',
    width: '200px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Roll Number:</strong> {rollNumber}</p>
      <p><strong>Batch:</strong> {batch}</p>
      <p><strong>Favorite Language:</strong> {favoriteLanguage}</p>
    </div>
  );
};

export default StudentCard;
