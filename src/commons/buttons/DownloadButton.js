import React from 'react';
import { useShowContext } from 'react-admin';
import { Button } from '@material-ui/core';

const DownloadButton = (props) => {
  const { record } = useShowContext();
  if (!record) return null;

  console.log('record', record);

  return (
    <a href={record['schema:image']} download="test.png" target="_blank">
      <Button {...props}>
        Télécharger
      </Button>
    </a>

  );
};

export default DownloadButton;
