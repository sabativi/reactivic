import React from 'react';

const Quote = ({ quote }) => (
  <blockquote className="quote-box">
    <p>“</p>
    <p>{quote.content}</p>
    <hr/>
    <div>
      <p>{quote.who}</p>
      <p>
        <span>{quote.position}</span>
      </p>
    </div>
  </blockquote>
)

export default Quote;
