import React from 'react';

function Card({ title, text, footer }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      {footer && <div className="card-footer">{footer}</div>} {/* Exibe o rodapé se passar o footer */}
    </div>
  );
}

export default Card;

