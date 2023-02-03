import React, { useState, useCallback, useEffect } from 'react';
import { useShowContext, useGetIdentity, useNotify, useRefresh, useTranslate } from 'react-admin';
import { useCollection, useOutbox, ACTIVITY_TYPES } from '@semapps/activitypub-components';
import { Button } from '@material-ui/core';
import EmitDialog from '../dialogs/EmitDialog/EmitDialog';

const EmitButton = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { record } = useShowContext();

  // const outbox = useOutbox();

  // const notify = useNotify();
  // const refresh = useRefresh();
  // const emit = useCallback(async () => {
  //   setDisabled(true);
  //   try {
  //     await outbox.post({
  //       type: ACTIVITY_TYPES.JOIN,
  //       actor: outbox.owner,
  //       object: record.id,
  //       to: record['dc:creator'],
  //     });
  //     notify('app.notification.event_joined');
  //     setJoined(true);
  //     setTimeout(refresh, 3000);
  //   } catch (e) {
  //     notify(e.message, 'error');
  //   }
  //   setDisabled(false);
  // }, [setDisabled, record, notify, refresh, outbox]);

  if (!record) return null;

  return (
    <>
      <Button onClick={() => setDialogOpen(true)} {...props}>
        Emettre
      </Button>
      {dialogOpen && <EmitDialog badgeUri={record.id} close={() => setDialogOpen(false)} />}
    </>

  );
};

export default EmitButton;
