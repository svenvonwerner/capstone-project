import styled from 'styled-components';
import axios from 'axios';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ChallengeCardGallery({ image, handleSetImage, id, handlePhotoUpload }) {
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
    handlePhotoUpload(id);
  }

  // function handlePhotoUpload(id) {
  //   // console.log(challengeData.find(item => item.id === id));
  //   setChallengeData(
  //     challengeData.map(item => {
  //       if (item.id === id) {
  //         return { ...item, photo: [...image, response.data.url]};
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // }

  return (
    <WrapperSection>
      <div>
        <input type="file" name="file" onChange={upload} />
      </div>
      <WrapperDiv>
        {image.map(image => {
          return <img key={image} src={image} alt="" style={{ width: '200px' }} />;
        })}
      </WrapperDiv>
    </WrapperSection>
  );
}

const WrapperSection = styled.section`
  height: 500px;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  background-color: #f2f2f2;
  padding-left: 3rem;
`;
const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: 3rem;
`;
