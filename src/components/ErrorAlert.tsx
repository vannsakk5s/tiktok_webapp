export const ErrorAlert = ({ message }: { message: string }) => {
  if (!message) return null;
  
  return (
    <div className="error-alert">
      {message}
    </div>
  );
};
