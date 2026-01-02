import React, { useEffect } from 'react';

const AdComponent = ({ slot, style = { display: 'block' }, format = 'auto', responsive = 'true' }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-2053975905096329"  // Replace with your publisher ID
      data-ad-slot={slot}                     // Your ad unit slot ID from AdSense
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
};

export default AdComponent;