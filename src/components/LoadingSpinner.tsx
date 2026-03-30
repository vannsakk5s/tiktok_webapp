export const LoadingSpinner = ({ label = 'Processing...' }: { label?: string }) => {
  return (
    <div className="loader-container">
      <div className="spinner large-spinner"></div>
      <span>{label}</span>
    </div>
  );
};
