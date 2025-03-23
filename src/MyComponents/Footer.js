import React from 'react';

export const Footer = () => {
  let footerStyle = {
    poition: 'relative',
    top: '70vh',
    width: '100%',
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; prabhatTodos.com</p>
    </footer>
  );
};

