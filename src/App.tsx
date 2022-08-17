import React, { useState } from 'react';
import './styles.css';
import logo from './logo.svg';
import './App.css';
import InputBox from './components/inputbox';
import RadioButton from './components/radiobutton';

function App() {
  const currentYear = (new Date()).getFullYear();
  const years = Array.from(new Array(21),(val, index) => currentYear - index);
  const radioButtonOptions = ['Coffee', 'Tea', 'Juice'];
  
  const [name, setName] = useState('');
  const [selectedDrink, setSelectedDrink] = useState<String>();
  const [selectedYear, setSelectedYear] = useState<String>(currentYear.toString());

  const styles: { [name: string]: React.CSSProperties } = {
    container: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    select: {
      padding: 5,
      width: 200,
    },
    result: {
      marginTop: 30,
    },
  };

  const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value);
  }

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedYear(value);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    if(!selectedDrink || !name){
      alert('Name and drink are mandatory fields');
      return;
    }
    alert(name);
    console.log('Selected drink is : ', selectedDrink)
    console.log('Selected year is : ', selectedYear)
  }


  return (
    <>
      <form onSubmit={submitForm}>
        <div className="flex-container">
          <div>
            <InputBox 
              type='text' 
              placeholder='Enter your name'
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <fieldset>
              <legend>Please select your most favorite drink?</legend>
              {radioButtonOptions.map(value=>
                  <RadioButton 
                    type="radio"
                    name="drink"
                    value={value}
                    onChange={radioHandler}
                  />
                )}
            </fieldset> 
          </div>

          <div>
            <select onChange={selectChange} style={styles.select} className='form-control'>
              {
                years.map((year, index) => {
                  return <option key={`year${index}`} value={year}>{year}</option>
                })
              }
            </select>
          </div>
          <div>
            <button type="submit" className="btn">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
