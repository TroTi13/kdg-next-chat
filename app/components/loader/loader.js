export default function Loader({ loading }) {
  return (
    <div className={`spinner-border text-danger mt-3 ${ loading ? '' : 'd-none' }`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
  );
}