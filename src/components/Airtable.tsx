import React from 'react';

const Airtable: React.FC = () => {
  return (
    <div className="w-full h-screen md:h-screen rounded-[16px] overflow-hidden border-[2px] border-[#389DF9]">
      <iframe
        className="w-full h-full"
        src="https://airtable.com/embed/app5njLO852rBMkWj/pagr30Zr2DdZu8kXA/form"
        frameBorder="0"
        style={{ background: 'transparent' }}
        title="Airtable Form"
      ></iframe>
    </div>
  );
};

export default Airtable;
