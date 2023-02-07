import React from 'react';

const BadgeTitle = ({ record }) => {
  return <span>{record?.['schema:name']}</span>;
};

export default BadgeTitle;
