import "./style.css";

const OpenModal = ({ isModal, setIsModal, title, content }) => {
  return (
    <>
      {isModal && (
        <div className="overlay" onClick={() => setIsModal(false)}>
          <div className="modalWrapper" onClick={(e) => e.stopPropagation()}>
            <div>
              <h3>{title}</h3>
              <p>{content}</p>
              <button onClick={() => setIsModal(false)} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenModal;
