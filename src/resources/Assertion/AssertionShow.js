import React from 'react';
import {ShowBase, useRecordContext, useTranslate} from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import { ReferenceField } from '@semapps/field-components';
import { AvatarWithLabelField } from '@semapps/field-components';
import { ReferenceCollectionField } from '@semapps/activitypub-components';
import { GridList } from '@semapps/list-components';
import MarkdownField from '../../commons/fields/MarkdownField';
import BodyList from '../../commons/lists/BodyList/BodyList';
import AssertionHeader from "./AssertionHeader";
import AssertionActionsCard from "./AssertionActionsCard";
import AssertionDetails from "./AssertionDetails";
import ProfileField from "../../commons/fields/ProfileField";
import useOpenExternalApp from "../../hooks/useOpenExternalApp";

const LinkToExternalApp = ({ type, linkType = 'show', children }) => {
  const record = useRecordContext();
  const openExternalApp = useOpenExternalApp();
  return (
    <a href={openExternalApp(type, record.id, linkType)}>
      {children}
    </a>
  )
}

const AssertionShow = (props) => {
  const { identity } = useCheckAuthenticated();
  const translate = useTranslate();
  if (!identity?.id) return null;
  return (
    <ShowBase {...props}>
      <>
        <AssertionHeader />
        <BodyList
          aside={
            <AssertionActionsCard>
              <AssertionDetails orientation="vertical" />
            </AssertionActionsCard>
          }
        >
          <MarkdownField source="evidence.narrative" />
          <ReferenceField label="Émetteur" reference="Badge" source="badge" link={false}>
            <ReferenceField reference="Actor" source="issuer" link={false}>
              <ReferenceField reference="Profile" source="url" link={false}>
                <ProfileField />
              </ReferenceField>
            </ReferenceField>
          </ReferenceField>
          <ReferenceField label="Autres destinataires" reference="Badge" source="badge" link={false}>
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
          </ReferenceField>
        </BodyList>
      </>
    </ShowBase>
  );
};

export default AssertionShow;
