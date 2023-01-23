import "./ModalImage.css";

function ModalImage(props) {
  const { src, alt, imageOpened, toggleImageOpened } = props;

  return (
    <>
      {imageOpened && (
        <div className="modal-image">
          <img src={src} alt={alt} />
          <i className="fas fa-times" onClick={toggleImageOpened}></i>
        </div>
      )}
    </>
  );
}

export default ModalImage;
