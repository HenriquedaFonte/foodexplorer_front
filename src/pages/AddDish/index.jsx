import { Container, Form, InputUploadImg } from './styles';
import { Footer } from '../../components/Footer';
import { HeaderAdmin } from '../../components/HeaderAdmin';
import { ButtonText } from '../../components/ButtonText';
import { IoIosArrowBack } from 'react-icons/io';
import { Input } from '../../components/Input';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Ingredients } from '../../components/Ingredients';

export function AddDish() {

  
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
        <div className='container'>
          <h1>Add Dish</h1>
          <section>
            <div className='inputLabelPosition'>
              <label htmlFor='dishImg'>Dish IMG</label>
              <InputUploadImg
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
              <Input
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
                  // onClick={handleAddTag} 
                />
              </div>
            </div>
            <div className='inputLabelPosition'>
              <label htmlFor='price'>Price</label>
              <Input 
                type='number'
                placeholder='00.00$'
                maxLength='15' 
                pattern='([0-9]{1,3}\.)?[0-9]{1,3},[0-9]{2}$'
              ></Input>
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