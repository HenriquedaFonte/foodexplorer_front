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


export function AddDish() {
  const navigate = useNavigate(); 
  const [isPopupVisible, setIsPopupVisible] = useState(false); 
  const [avatar, setDishImg] = useState('');
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

  // const [newIngredientAvatar, setNewIngredientAvatar] = useState('');
  // const [newIngredientAvatarFile, setNewIngredientAvatarFile] = useState(null);  

  // function handleAddAvatar(event) {
  //   const file = event.target.files[0];
  //   setNewIngredientAvatarFile(file);

  //   const avatarPreview = URL.createObjectURL(file);
  //   setNewIngredientAvatar(avatarPreview);
  // };


  // if (ingredientsList.avatar) {
  //   const fileUploadForm = new FormData();
  //   fileUploadForm.append('avatar', ingredientsList.avatar);

  //   const response = api.patch('/ingredients/avatar', fileUploadForm);
  //   ingredientsList.avatar = response.data.avatar;
  // };
  
  async function handleNewDish() {    

    await api.post('/dishes', {
      category, 
      title,
      description, 
      price, 
      avatar,
      ingredients: ingredientsList
    });

    alert('New Dish created');
    setDishImg('');
    setDishName('');
    setDishCategory('');
    setIngredientsList('');
    setDishPrice('');
    setDishDescription('');
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
      <Form>
      {isPopupVisible ? <DataIngredients onSetIngredients={handleSetIngredients} onClose={() => {setIsPopupVisible(false)}}/> : null}
        <div className='container'>
          <h1>Add Dish</h1>
          <section>
            <div className='inputLabelPosition'>
            <UploadImg>
              <h3>Ingredient IMG</h3>
              <label htmlFor='ingredientImg' id='ingredientImg' placeholder='Chosen Image'> 
                <input 
                  type='file' 
                  name='ingredientImg'
                  value={avatar}
                  onChange={e => setDishImg(e.target.value)}
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
              <option value='Main dish'>Main dish</option>
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