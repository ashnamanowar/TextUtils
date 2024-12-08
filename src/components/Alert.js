import React from 'react';

function Alert(props) {
  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} fixed-top alert-dismissible fade show`}
          role="alert"
          style={{
            zIndex: '1050',
            top: '10px',   
            left: '50%',
            transform: 'translateX(-50%)', 
          }}
        >
          <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      )}
    </>
  );
}

export default Alert;
