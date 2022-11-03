import { useState } from 'react';
import { Container, Form, InputForm, UploadImg } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { ButtonText } from '../../components/ButtonText';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../components/Button';
import { Ingredients } from '../../components/Ingredients';
import { DataIngredients } from '../../components/DataIngredients';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';


export function AddDish() {
  const navigate = useNavigate(); 
  const {user} = useAuth();
  const [isPopupVisible, setIsPopupVisible] = useState(false); 
  const [avatar, setAvatar] = useState(null);
  const [title, setDishName] = useState('');
  const [category, setDishCategory] = useState('');
  const [price, setDishPrice] = useState('');
  const [description, setDishDescription] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]); 

  function handleSetIngredients(ingredients) {
    setIngredientsList(prevstate => [...prevstate, ingredients]);
  };

  function handleRemoveIngredient(deleted) {
    setIngredientsList(prevstate => prevstate.filter(ingredient => ingredient !== deleted));
  };

 
  async function handleNewDish() {  
    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('avatar', avatar);
    formData.append('user_id', user.id);
 

    ingredientsList.map(ingredient => (
      formData.append("ingredients", JSON.stringify(ingredient))
      
    ));

    await api.post('/dishes', formData);
    alert('New Dish created');
    navigate(-1);
   
    // await api.post('/dishes', {ingredients: ingredientsList})
    
    // await api.post('/dishes', {
    //   category, 
    //   title,
    //   description, 
    //   price, 
    //   avatar,
    //   user_id: user.id,
    //   ingredients: ingredientsList
    // });

    // alert('New Dish created');
    // navigate(-1);
  };

  return (
    <Container>
      <HeaderAdmin/>
      <div className='buttonBack'>
        <ButtonText
          title='Back'
          icon={IoIosArrowBack}
          id='buttonBack'
          onClick={() => navigate('/')}
        />
      </div>
      <Form >
      {isPopupVisible ? <DataIngredients onSetIngredients={handleSetIngredients} onClose={() => {setIsPopupVisible(false)}}/> : null}
        <div className='container'>
          <h1>Add Dish</h1>
          <section>
            <div className='inputLabelPosition'>
            <UploadImg>
              <h3>Dish IMG</h3>
              <label htmlFor='dishImg' id='dishImg' placeholder='Chosen Image'> 
                <input 
                  type='file' 
                  multiple
                  name='dishImg'
                  onChange={(e) => setAvatar(e.target.files[0])}
                />
              </label>
            </UploadImg>
            </div>
            <div className='inputLabelPosition'>
              <label htmlFor='dishName'>Name</label>
              <InputForm
                name='dishName'
                id='dishName'
                type='text'
                placeholder='Ex.: Caesar Salad'
                value={title}
                onChange={e => setDishName(e.target.value)}
              />
            </div>
            <select 
              placeholder='Choose plate category'
              onChange={e => setDishCategory(e.target.value)}
            >
              <option value='Placeholder'>Choose dish category</option>
              <option value='Main Dish'>Main Dish</option>
              <option value='Dessert'>Dessert</option>
              <option value='Drink'>Drink</option>
            </select>
          </section>
          <section>
            <div className='inputLabelPosition'>
              <label htmlFor='ingredients'>Ingredients</label>
              <div className='divIngredients'>
                { ingredientsList &&
                  ingredientsList.map((ingredientName, index) => (
                    <Ingredients
                      key={index}
                      value={ingredientName.name}
                      onClick={() => {handleRemoveIngredient(ingredientName)}}
                    />
                  ))
                }                
                <Ingredients
                  isNew 
                  placeholder='New ingredient' 
                  value={ingredientsList.name}
                  onClick={() => setIsPopupVisible(true)}  
                />                
              </div>
            </div>
            <div className='inputLabelPositionPrice'>
              <label htmlFor='price'>Price</label>
              <InputForm 
                type='number'
                id='price'
                placeholder='00.00$'
                maxLength='15' 
                value={price}
                onChange={e => setDishPrice(e.target.value)}
              />
            </div>
          </section>
          <section>
            <div className='inputLabelPosition'>
              <label htmlFor='description'>Description</label>
              <textarea 
                name='description'
                id='description'
                type='textarea'
                placeholder='Briefly talk about the dish, its ingredients and composition'
                value={description}
                onChange={e => setDishDescription(e.target.value)}
              />
            </div>
          </section>
            <Button title='Add dish' id='buttonAddDish' onClick={handleNewDish}/>
        </div>
      </Form>
      <Footer/>
    </Container>
  );
};