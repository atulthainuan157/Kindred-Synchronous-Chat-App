import React, { useEffect } from 'react'
import { useAppStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import { toast } from '../../components/ui/toast';
import ContextContainer from './components/context-container';
import ChatContainer from './components/chat-container';
import EmptyChatContainer from './components/empty-chat-container';

const Chat = () => {

  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.profileSetup) {
      toast.add({
        title: "Profile not completed",
        description: "Please setup and complete your profile"
      })
      navigate('/profile');
    }
  }, [userInfo, navigate])

  return (
    <div className='flex h-[100vh] text-white overflow-hidden'>
      <ContextContainer />
      <EmptyChatContainer />
      <ChatContainer />
    </div>
  )
}

export default Chat;