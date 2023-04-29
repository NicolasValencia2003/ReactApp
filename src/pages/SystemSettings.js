import React from 'react';
import './SystemSettings.css'
import { FaCookie, FaEyeSlash, FaSun, FaVolumeUp, FaSave } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SystemSettings = () => {

  const handleSaveClick = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Settings saved successfully!',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div className='SystemSettings'>
      <div className='SystemSettingsBox'>
        <form>
          <div className='SystemSettingsOption'>
            <FaCookie className='SystemSettingsIcon' />
            <label htmlFor='enable-cookies'>Enable cookies:</label>
            <input type='checkbox' id='enable-cookies' name='enable-cookies' />
          </div>

          <div className='SystemSettingsOption'>
            <FaEyeSlash className='SystemSettingsIcon' />
            <label htmlFor='turn-off-tracking'>Turn off tracking:</label>
            <input type='checkbox' id='turn-off-tracking' name='turn-off-tracking' />
          </div>

          <div className='SystemSettingsOption'>
            <FaSun className='SystemSettingsIcon' />
            <label htmlFor='brightness'>Brightness:</label>
            <input type='range' id='brightness' name='brightness' min='0' max='100' />
          </div>

          <div className='SystemSettingsOption'>
            <FaVolumeUp className='SystemSettingsIcon' />
            <label htmlFor='volume'>Volume:</label>
            <input type='range' id='volume' name='volume' min='0' max='100' />
          </div>
          <button className='SystemSettingsButton' type='submit' onClick={handleSaveClick}>
            <FaSave className='SystemSettingsButtonIcon' />
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SystemSettings;
