import React, { useMemo, useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import styles from "./styles.module.scss";

interface Props {
  imageUrl?: any;
  setImageUrl?: (value: any) => void;
}

function UpLoadImg(props: Props) {
  const { imageUrl, setImageUrl } = props;
  const [loading, setLoading] = useState(false);
  // const [imageUrl, setImageUrl] = useState<string>();

  useMemo(() => {
    if (imageUrl && setImageUrl) {
      setImageUrl(imageUrl)
    }
  }, [imageUrl])

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        if (setImageUrl) setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8, borderRadius: '50%' }}>Upload</div>
    </div>
  );

  return (
    <Upload
      style={{
        borderRadius: '50%',
      }}
      name="avatar"
      listType="picture-card"
      className={`avatar-uploader ${styles.avatar}`}
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%', borderRadius: '50%' }} /> : uploadButton}
    </Upload>
  )
}

export default UpLoadImg