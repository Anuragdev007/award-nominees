import React, { useState,useEffect } from 'react';
import '../styles/Home.module.css'



const categories = [
  { name: 'Best Picture', nominees: ['The Father', 'Judas and the Black Messiah', 'Mank', 'Minari', 'Nomadland', 'Promising Young Woman', 'Sound of Metal', 'The Trial of the Chicago 7'] },
  { name: 'Best Director', nominees: ['Thomas Vinterberg (Another Round)', 'David Fincher (Mank)', 'Lee Isaac Chung (Minari)', 'Chloé Zhao (Nomadland)', 'Emerald Fennell (Promising Young Woman)'] },
  { name: 'Best Actor', nominees: ['Riz Ahmed (Sound of Metal)', 'Chadwick Boseman (Ma Rainey\'s Black Bottom)', 'Anthony Hopkins (The Father)', 'Gary Oldman (Mank)', 'Steven Yeun (Minari)'] },
  { name: 'Best Actress', nominees: ['Viola Davis (Ma Rainey\'s Black Bottom)', 'Andra Day (The United States vs. Billie Holiday)', 'Vanessa Kirby (Pieces of a Woman)', 'Frances McDormand (Nomadland)', 'Carey Mulligan (Promising Young Woman)'] }
];
function Nominee() {
    const [selectedNominees, setSelectedNominees] = useState({});
    
  
    const handleNomineeSelect = (categoryName, nomineeName) => {
      setSelectedNominees(prevState => ({
        ...prevState,
        [categoryName]: nomineeName
      }));
    };
  
    const handleSubmit = () => {
      console.log(selectedNominees);
    };
  
    return (
      <div className="App">
        <h1>2021 Academy Awards Ballot</h1>
        {categories.map(category => (
          <div key={category.name} className="category">
            <h2>{category.name}</h2>
            <div className="nominees">
              {category.nominees.map(nominee => (
                
                <div
                  key={nominee}
                  className={`nominee ${selectedNominees[category.name] === nominee ? 'selected' : ''}`}
                  onClick={() => handleNomineeSelect(category.name, nominee)}
                >
                  <p className='nominee_name'>{nominee}</p>
                  <img src={`https://source.unsplash.com/200x200/?${nominee}`} alt={nominee} />
                  
                  <button>Select</button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
        
      </div>
    );
  }
  
  export default Nominee;