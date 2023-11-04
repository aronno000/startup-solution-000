import React from 'react';
import CHome from './contents/CHome';
import CContact from './contents/CContact';
import CAboutUS from './contents/CAboutUS';
import CService from './contents/CService';

const BodyContent = ({ contentId }) => {
  let content;

  // Define different content for each contentId
  if (contentId === 'home') {
    content = <CHome />;
  } else if (contentId === 'service') {
    content = <CService />;
  } else if (contentId === 'aboutUS') {
    content = <CAboutUS />;
  } else if (contentId === 'ContactUS') {
    content = <CContact />;
  } else {
    content = <CHome />;
  } 

  return (
    <div>
      {content}
    </div>
  );
}

export default BodyContent;
