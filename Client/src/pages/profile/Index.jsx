import React from 'react'
import { useAppStore } from '../../store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useAppStore();
  const { firstName, setFirstName } = useState('');
  const { lastName, setLastName } = useState('');
  const { image, setImage } = useState(null);
  const { hovered, setHovered } = useState(false);
  const { selectedColors, setSelectedColors } = useState(0);



  return (
    <div>Profile
      <div>
        Email: {userInfo.email}
      </div>
    </div>
  )
}

export default Profile;