const AuthNotification = ({ message, message_ok }) => {
  return message ? (
    <div
      className={
        (message_ok
          ? `border-green-600 bg-green-600`
          : `border-red-600 bg-red-600`) +
        " border bg-opacity-10 rounded p-3 mb-2"
      }
    >
      <p className="">{message}</p>
    </div>
  ) : (
    ""
  );
};

export default AuthNotification;