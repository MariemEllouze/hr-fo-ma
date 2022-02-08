
import './UploadButton.scss';
import { Progress } from 'reactstrap';
import React, { useState } from 'react';
import uplodIcon from '../image/upload.png';

function SingleUploader (props)  {
    let { id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(false);
    const [uploadedImg, setUplodedImg] = useState("");
    const [uploadProgress, setProgress] = useState(0);

    const handleChange = async e => {
        
        console.log("change event", e.target.files) ;
        //  let formData = new FormData();
        //  formData.append('file', e.target.files);
         
        //  setUploding(true);
        //  let { data } = await API.post(uploadUrl, formData, {
        //      onUploadProgress: ({ loaded, total }) => {
        //       let progress = ((loaded / total) * 100).toFixed(2);
        //         setProgress(progress);
        //      }
        // });
        //  setUplodedImg(data.imagePath);
        //  setUploding(false);
    }

    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex">
                <div className="d-flex">
                    <div className="file-uploader-mask dflex justify-content-center align-items-center">
                        <img className="file-uploader-icon" src={uplodIcon} alt="Upload-Icon" />
                    </div>
                    <input className="file-input" type="file"  id={id} onChange={handleChange} />
                </div>
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
                {
                    uploadedImg && !isUploding ? (
                        <img
                            src={uploadedImg}
                            alt="UploadedImage"
                            className="img-thumbnail img-fluid uploaded-img ml-3"
                            position="center"
                        />
                    ) : null
                }
            </div>
        </div>
    )
} export default SingleUploader  ;