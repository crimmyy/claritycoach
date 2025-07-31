import React from 'react';

const Airtable: React.FC = () => {
  return (
    <div className="w-full rounded-[16px] overflow-hidden bg-[#EBF5FE]">
      <iframe
        className="w-full min-h-[1000px] md:min-h-[1200px]"
        src="https://airtable.com/embed/app5njLO852rBMkWj/pagr30Zr2DdZu8kXA/form"
        frameBorder="0"
        style={{ background: 'transparent' }}
        title="Airtable Form"
        scrolling="yes"
      ></iframe>
    </div>
  );
};

export default Airtable;
