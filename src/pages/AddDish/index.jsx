import { Container, Form, InputForm } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { ButtonText } from '../../components/ButtonText';
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Ingredients } from '../../components/Ingredients';
import { DataIngredients } from '../../components/DataIngredients';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function AddDish() {
  const navigate = useNavigate(); 
  const [isPopupVisible, setIsPopupVisible] = useState(false); 

  return (
    <Container>
      <HeaderAdmin/>
      <div className='buttonBack'>
        <ButtonText
          title='Back'
          icon={IoIosArrowBack}
          id='buttonBack'
          onClick={() => navigate(-1)}
        />
      </div>
      <Form>
      {isPopupVisible ? <DataIngredients onClose={() => {setIsPopupVisible(false)}}/> : null}
        <div className='container'>
          <h1>Add Dish</h1>
          <section>
            <div className='inputLabelPosition'>
              <label htmlFor='dishImg'>Dish IMG</label>
              <InputForm
                name='dishImg'
                id='dishImg'
                type='text'
                readOnly={true}
                placeholder='Select image'
              />
              <button id='addDishImgButton'>
                <MdOutlineFileUpload/>
              </button>

            </div>
            <div className='inputLabelPosition'>
              <label htmlFor='dishName'>Name</label>
              <InputForm
                name='dishName'
                id='dishName'
                type='text'
                placeholder='Ex.: Caesar Salad'
              />
            </div>
            <select placeholder='Choose plate category'>
              <option value='Placeholder'>Choose dish category</option>
              <option value='Main dish'>Main dish</option>
              <option value='Dessert'>Dessert</option>
              <option value='Drink'>Drink</option>
            </select>
          </section>
          <section>
            <div className='inputLabelPosition'>
              <label htmlFor='ingredients'>Ingredients</label>
              <div className="divIngredients">
                <Ingredients
                  isNew 
                  placeholder="New ingredient" 
                  onChange={e => setNewTag(e.target.value)} 
                  // value={newTag}
                  onClick={() => setIsPopupVisible(true)}  // 
                />                
              </div>
            </div>
            <div className='inputLabelPosition'>
              <label htmlFor='price'>Price</label>
              <InputForm 
                type='number'
                id='price'
                placeholder='00.00$'
                maxLength='15' 
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
              />
            </div>
          </section>
            <Button title='Add dish' id='buttonAddDish'/>
        </div>
      </Form>
      <Footer/>
    </Container>
  );
};