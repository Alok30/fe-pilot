export const handleSuccess = ({ disbaleToast, msg, msgType, successCb, data }) => {
  console.log(msgType, data);
  if (!disbaleToast && msg) console.log('Success:', data);
  successCb({
    msgType,
    msg,
    data,
  });
};

export const handleError = ({ disbaleToast, msg, msgType, failureCb }) => {
  console.log(msgType);
  if (!disbaleToast && msg) console.log(msg);
  failureCb({
    msgType,
    msg,
  });
};