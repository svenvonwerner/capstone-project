import styled from 'styled-components';
import axios from 'axios';
import UploadImg from '../images/iconUploadPhoto.svg';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ChallengeCardGallery({
  photo,
  image,
  handleSetImage,
  id,
  handlePhotoUpload,
  // handleDeletePhoto,
}) {
  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    handleSetImage([...image, response.data.url]);
    handlePhotoUpload(id, response.data.url);
  }

  return (
    <WrapperSection>
      <div>
        <label>
          <Inputbox type="file" name="file" onChange={upload} hidden />
          <img src={UploadImg} alt="upload" width="35" height="35" />
        </label>
      </div>
      <WrapperDiv>
        {photo.map(img => (
          <img key={img} src={img} alt="" style={{ width: '300px' }} />
        ))}
      </WrapperDiv>
    </WrapperSection>
  );
}

const WrapperSection = styled.section`
  /* width: 360px; */
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  padding-left: 1rem;
  padding-right: 1rem;
`;
const WrapperDiv = styled.div`
  width: 100%;
  margin: 3rem 0 3rem 0;
  display: flex;
  overflow-y: scroll;
  gap: 0.2rem;
`;

const Inputbox = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 3px;
  /* border: 1px solid black; */
`;
