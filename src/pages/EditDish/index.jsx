import { useState, useEffect } from 'react';
import { Container, Form, InputForm, UploadImg } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { ButtonText } from '../../components/ButtonText';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../components/Button';
import { Ingredients } from '../../components/Ingredients';
import { DataIngredients } from '../../components/DataIngredients';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';


export function EditDish() {
  const params = useParams();
  const navigate = useNavigate(); 
  const {user} = useAuth();
  const [isPopupVisible, setIsPopupVisible] = useState(false); 
  const [dish, setDish] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [title, setDishName] = useState('');
  const [category, setDishCategory] = useState('');
  const [price, setDishPrice] = useState('');
  const [description, setDishDescription] = useState('');
  const [ingredientsList, setIngredientsList] = useState([]); 

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setDish(response.data);
    }
    fetchDish();
  }, []);

  function handleSetIngredients(ingredients) {
    setIngredientsList(prevstate => [...prevstate, ingredients]);
  };

  function handleRemoveIngredient(deleted) {
    setIngredientsList(prevstate => prevstate.filter(ingredient => ingredient !== deleted));
  };

 
  async function handleUpdateDish() {  
    console.log(avatar);
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

    await api.patch('/dishes', formData);
    alert('Dish updated successfully');
    navigate(-1);

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
                  // value={dish.avatar}
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
                value={dish.title}
                onChange={e => setDishName(e.target.value)}
              />
            </div>
            <select 
              placeholder='Choose plate category'
              value={dish.category}
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
                { dish.ingredients &&
                  dish.ingredients.map((ingredient, index) => (
                    <Ingredients
                      key={index}
                      value={ingredient.name}
                      onClick={() => {handleRemoveIngredient(ingredient)}}
                    />
                  ))
                }                
                <Ingredients
                  isNew 
                  placeholder='New ingredient' 
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
                value={dish.price}
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
                value={dish.description}
                onChange={e => setDishDescription(e.target.value)}
              />
            </div>
          </section>
            <Button title='Update dish' id='buttonAddDish' onClick={handleUpdateDish}/>
        </div>
      </Form>
      <Footer/>
    </Container>
  );
};