import React from 'react';

const BodyContent = ({ contentId }) => {
  let content;

  // Define different content for each contentId
  if (contentId === 'home') {
    content = <CHome />;
  } else if (contentId === 'service') {
    content = <CResume />;
  } else if (contentId === 'aboutUS') {
    content = <CWorks />;
  } else if (contentId === 'ContactUS') {
    content = <CBlogs />;
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
