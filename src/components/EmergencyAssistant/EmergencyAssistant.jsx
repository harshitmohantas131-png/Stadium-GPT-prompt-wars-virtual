import React, { useState } from 'react';
import EmergencyButton from './EmergencyButton';
import EmergencyModal from './EmergencyModal';

const EmergencyAssistant = ({ role, stadium, matchStage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <EmergencyButton onClick={() => setIsModalOpen(true)} />
      <EmergencyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        role={role}
        stadium={stadium}
        matchStage={matchStage}
      />
    </>
  );
};

export default EmergencyAssistant;
