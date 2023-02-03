import React, { useCallback } from 'react';
import { ShowBase, useRecordContext, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderShow from '../../layout/HeaderShow';
import BodyList from '../../commons/lists/BodyList/BodyList';
import BadgeDetails from './BadgeDetails';
import EditButton from '../../commons/buttons/EditButton';
import ShareButton from '../../commons/buttons/ShareButton';
import useOpenExternalApp from "../../hooks/useOpenExternalApp";
import BadgesActionsCard from './BadgeActionsCard';

const LinkToExternalApp = ({ type, linkType = 'show', children }) => {
  const record = useRecordContext();
  const openExternalApp = useOpenExternalApp();
  return (
    <a href={openExternalApp(type, record.id, linkType)}>
      {children}
    </a>
  )
}

const BadgeShow = (props) => {
  const { identity } = useCheckAuthenticated();
  const translate = useTranslate();
  const contactFieldLabel = useCallback(record => {
    if (identity?.id === record['dc:creator']) {
      return translate('app.action.contact_attendees')
    } else {
      return translate('app.action.contact_organizer');
    }
  }, [identity, translate]);
  if (!identity?.id) return null;
  return (
    <ShowBase {...props}>
      <>
        <HeaderShow
          type="apods:hasFormat"
          details={<BadgeDetails />}
          actions={
            <>
              <ShareButton />
              <EditButton />
            </>
          }
        />
        <BodyList
          aside={
            <BadgesActionsCard>
              <BadgeDetails orientation="vertical" />
            </BadgesActionsCard>
          }
        >
          <MarkdownField source="description" addLabel={false} />
          {/*<ReferenceCollectionField reference="Actor" source="apods:attendees">*/}
          {/*  <GridList xs={4} sm={2} linkType={false}>*/}
          {/*    <ReferenceField reference="Profile" source="url" link={false}>*/}
          {/*        <LinkToExternalApp type="as:Profile">*/}
          {/*          <AvatarWithLabelField*/}
          {/*            label="vcard:given-name"*/}
          {/*            image="vcard:photo"*/}
          {/*            defaultLabel={translate('app.user.unknown')}*/}
          {/*            labelColor="grey.300"*/}
          {/*          />*/}
          {/*        </LinkToExternalApp>*/}
          {/*    </ReferenceField>*/}
          {/*  </GridList>*/}
          {/*</ReferenceCollectionField>*/}
          {/*<ContactField label={contactFieldLabel} source="dc:creator" context="id" />*/}
        </BodyList>
      </>
    </ShowBase>
  );
};

export default BadgeShow;
