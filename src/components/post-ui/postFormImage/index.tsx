"use client";

import { CldUploadWidget } from 'next-cloudinary';
import { Button } from "../../ui/button";
import { useState } from 'react';

type CldRes = {
  public_id: string;
  url: string;
}

const UploadImage = () => {

  const [publicId, setPublicId] = useState('');

  return(
    <>
      <CldUploadWidget uploadPreset={process.env.NEXT_UPLOAD_PRESET}
        onUpload={( result ) => {
          if(result.event !== "success") return
          const info = result.info as CldRes;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          const handleAction = () => {
            if(!publicId) open()
            setPublicId('')
          }
          return(
            <Button onClick={handleAction}>{publicId ? 'Delete Image' : 'Upload Image'}</Button>
          )
        }}
      </CldUploadWidget>
    </>
  );
}

export default UploadImage;