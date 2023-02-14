import React, { useState } from 'react';
import { useShowContext } from 'react-admin';
import { Button } from '@material-ui/core';
import EmitDialog from '../dialogs/EmitDialog/EmitDialog';

const EmitButton = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { record } = useShowContext();
  if (!record) return null;

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} {...props}>
        Émettre
      </Button>
      {dialogOpen && <EmitDialog badgeUri={record.id} close={() => setDialogOpen(false)} />}
    </>

  );
};

export default EmitButton;
