import { Container, Form, InputForm } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { MdOutlineFileUpload } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function DataIngredients({onClose= () => {}, children}) {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="containerPopup">
        <div className="headerPopup">
          <ButtonText
              title='Back'
              icon={IoIosArrowBack}
              id='buttonBack'
              onClick={onClose}
          />
          <h1>Add Ingredients</h1>
        </div>
        <Form>
          <div className='inputLabelPosition'>
            <label htmlFor='ingredientImg'>Ingredient IMG</label>
            <InputForm
              name='ingredientImg'
              id='ingredientImg'
              type='text'
              readOnly={true}
              placeholder='Select image'
            />
            <button id='addingredientImgButton'>
              <MdOutlineFileUpload/>
            </button>
          </div>
          <div className='inputLabelPosition'>
            <label htmlFor='dishName'>Name</label>
            <InputForm
              name='ingredientName'
              id='ingredientName'
              type='text'
              placeholder='Ex.: Tomato'                      
            />
          </div>               
        </Form>
        <Button title='Add' id='buttonAdd'/>
      </div>
    </Container>
  );
};