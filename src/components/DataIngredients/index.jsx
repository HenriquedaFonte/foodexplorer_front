import { Container, InputForm, UploadImg } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '../../components/Button';
import { useState } from 'react';



export function DataIngredients({onClose, onSetIngredients, children}) {

  const [newIngredientName, setNewIngredientName] = useState('');
  const [newIngredientAvatar, setNewIngredientAvatar] = useState('');
  // const [newIngredientAvatarFile, setNewIngredientAvatarFile] = useState(null);
  

  // function handleAddAvatar(event) {
  //   const file = event.target.files[0];
  //   setNewIngredientAvatarFile(file);
  //   const avatarPreview = URL.createObjectURL(file);
  //   setNewIngredientAvatar(avatarPreview);
  // };

  function handleAddIngredient() {

    const newIngredient = {
      name: newIngredientName,
      avatar: newIngredientAvatar  
    };
  
    onSetIngredients(newIngredient);
    setNewIngredientAvatar('');
    setNewIngredientName('');
  };


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
        <div className='formIngredients'>
          <div className='inputLabelPosition'>
            <UploadImg>
              <h3>Ingredient IMG</h3>
              <label htmlFor='ingredientImg' id='ingredientImg' placeholder='Chosen Image'> 
                <input 
                  type='file' 
                  name='ingredientImg'
                  value={newIngredientAvatar}
                  onChange={e => setNewIngredientAvatar(e.target.value)}
                />
              </label>
            </UploadImg>
          </div>
          <div className='inputLabelPosition'>
            <label htmlFor='dishName'>Name</label>
            <InputForm
              type='text'
              name='ingredientName'
              id='ingredientName'
              value={newIngredientName}              
              onChange={e => setNewIngredientName(e.target.value)} 
              placeholder='Ex.: Tomato'                      
            />
          </div>               
        </div>
        <Button 
          title='Add' 
          id='buttonAdd' 
          onClick={handleAddIngredient}
        />
      </div>
    </Container>
  );
};