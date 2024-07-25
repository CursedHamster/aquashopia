import "./ModalImage.css";

function ModalImage(props) {
  const { src, alt, imageOpened, toggleImageOpened } = props;

  return (
    <>
      {imageOpened && (
        <div className="modal-image" onClick={toggleImageOpened}>
          <img src={src} alt={alt} />
          <i className="fas fa-times"></i>
        </div>
      )}
    </>
  );
}

export default ModalImage;
