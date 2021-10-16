import { useState, useEffect } from 'react';
import Form from './components/Form';
import Collection from './components/Collection';
import Loading from './components/Loading';
import styles from './App.module.css';
import colors from './colors.module.css';

function App() {

  const [recipeInput, setRecipeInput] = useState({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = 'https://yves-recipes-api.herokuapp.com/api/recipes';

  // Delete Handler
  const recipeDeleteHandler = (event) => {
    setIsLoading(true);
    const id = event.target.id;
    fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    }).then(res => {
      setData(prevData => {
        const filteredData = data.filter((recipe) => id !== recipe._id);
        return filteredData;
      });
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  // Add New Recipe Handler
  const recipeFormHandler = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const newRecipe = {
      title: event.target.elements.recipe_title.value,
      date: event.target.elements.recipe_date.value,
      img: event.target.elements.recipe_img.value,
      body: event.target.elements.recipe_body.value,
    }
    setRecipeInput(newRecipe);
    // Reset Inputs -- Except date
    event.target.elements.recipe_title.value = '';
    event.target.elements.recipe_img.value = '';
    event.target.elements.recipe_body.value = '';
    // Set POST Request Options
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newRecipe)
    }).then(res => {
      return res.json();
    }).then((jsonRes => {
      setData(prevData => {
        const newData = [jsonRes, ...data];
        return newData;
      });
      setIsLoading(false);
    })).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    isLoading === true?
    fetch(url, { mode: 'cors' })
    .then(res => {
        return res.json();
    })
    .then(jsonResult => {
        setData(jsonResult);
        setIsLoading(false);
        console.log('Data Fetched');
    }) :
    console.log('No need to re-Fetch');
  }, []);

  return (
    <div className={styles.app}>
      <div className={`${styles['app-form']} ${colors.gradient}`}>
        <Form onSubmit={recipeFormHandler} />
      </div>
      <div className={styles['app-collection']}>
        { isLoading ?
          <Loading /> : 
          <Collection onDelete={recipeDeleteHandler} recipes={data} />
        }
      </div>
    </div>
  );
}

export default App;
