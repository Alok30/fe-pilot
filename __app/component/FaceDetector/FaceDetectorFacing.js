import React from 'react';

function FaceDetectorFacing({
  toggleCamera,
  children,
  zIndex,
  top,
  bottom,
  left,
  right,
  color,
  position,
}) {
  return (
    <div
      style={{
        top,
        bottom,
        left,
        right,
        zIndex,
        color,
        position,
      }}
      onClick={toggleCamera}
      onKeyDown={(ev) => ev.key === 'Enter' && toggleCamera()}
      role="button"
      tabIndex={0}
    >
      {children || 'Toggle Camera'}
    </div>
  );
}

FaceDetectorFacing.propTypes = {

};

FaceDetectorFacing.defaultProps = {
  color: 'white',
  top: 'auto',
  bottom: '50%',
  left: 'auto',
  right: '37%',
  position: 'absolute',
};

export default FaceDetectorFacing;
