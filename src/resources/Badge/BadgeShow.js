import React, { useCallback } from 'react';
import { ShowBase, useRecordContext, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import { ImageField, ReferenceField } from '@semapps/field-components';
import { AvatarWithLabelField } from '@semapps/field-components';
import { ReferenceCollectionField } from '@semapps/activitypub-components';
import { GridList } from '@semapps/list-components';
import MarkdownField from '../../commons/fields/MarkdownField';
import HeaderShow from '../../layout/HeaderShow';
import BodyList from '../../commons/lists/BodyList/BodyList';
import BadgeDetails from './BadgeDetails';
import EditButton from '../../commons/buttons/EditButton';
import ShareButton from '../../commons/buttons/ShareButton';
import useOpenExternalApp from "../../hooks/useOpenExternalApp";
import BadgesActionsCard from './BadgeActionsCard';
import ProfileField from "../../commons/fields/ProfileField";

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
          <MarkdownField source="criteria.narrative" />
          <ReferenceField reference="Actor" source="issuer" link={false}>
            <ReferenceField reference="Profile" source="url" link={false}>
              <ProfileField />
            </ReferenceField>
          </ReferenceField>
          <ReferenceCollectionField reference="Actor" source="recipient">
            <GridList xs={4} sm={2} linkType={false}>
              <ReferenceField reference="Profile" source="url" link={false}>
                  <LinkToExternalApp type="as:Profile">
                    <AvatarWithLabelField
                      label="vcard:given-name"
                      image="vcard:photo"
                      defaultLabel="Inconnu"
                      labelColor="grey.300"
                    />
                  </LinkToExternalApp>
              </ReferenceField>
            </GridList>
          </ReferenceCollectionField>
        </BodyList>
      </>
    </ShowBase>
  );
};

export default BadgeShow;
