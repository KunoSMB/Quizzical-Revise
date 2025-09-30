

const Start = (props) => {
  return (
    <div className="first-page-container">
      <h1 className="title">Quizzical</h1>

      {props.loadingError && (
        <p style={{ color: 'red' }}>{props.loadingError}</p>
      )}

      <h3 className="description">Click Start for Quiz to begin</h3>

      <button onClick={props.onStart} className="primary-btn">
        {props.loadingError ? 'Retry' : 'Start Quiz'}
      </button>
    </div>
  );
};

export default Start; 
