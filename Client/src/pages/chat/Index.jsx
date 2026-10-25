import React, { useEffect } from 'react'
import { useAppStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import { toast } from '../../components/ui/toast';

const Chat = () => {

  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(!userInfo.profileSetup) {
      toast.add({
        title: "Profile not completed",
        description: "Please setup and complete your profile"
      })
      navigate('/profile');
    }
  },[userInfo, navigate])

  return (
    <div>Chat</div>
  )
}

export default Chat;