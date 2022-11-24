import { Button, Checkbox, Form, Input, Modal } from 'antd';
import React, { useMemo, useState } from 'react'
import UpLoadImg from '../UpLoadImg';

interface Props {
  record: any;
  open?: boolean;
  setVisibleModal?: (value: boolean) => void;
}

function ModalEditUser(props: Props) {
  const { record, open, setVisibleModal } = props;
  const [imgSrc, setImgSrc] = useState<string | null>();
  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 4 },
  }

  const onFinish = (values: any) => {
    const fmData = {
      ...values,
      avatar: imgSrc
    }
    console.log(fmData);
  }

  const onCancel = () => {
    setImgSrc(null);
    if (setVisibleModal) setVisibleModal(false);
  }


  useMemo(() => {
    if (record) {
      console.log(record);
      setImgSrc(record.avatar)
      form?.setFieldsValue({
        name: record.name,
        username: record.username,
        address: record.address,
        email: record.email,
        active: record.is_active,
      })
    }
  }, [record]);

  return (
    <div>
      <Modal
        open={open}
        footer={false}
        closable={false}
        centered
      >
        <Form
          form={form}
          autoComplete='off'
          {...layout}
          onFinish={onFinish}
        >
          <Form.Item name='avatar'>
            <UpLoadImg imageUrl={imgSrc} setImageUrl={setImgSrc} />
          </Form.Item>
          <Form.Item label="Name" name='name'>
            <Input />
          </Form.Item>
          <Form.Item label="UserName" name='username'>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name='address'>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name='email'>
            <Input />
          </Form.Item>
          <Form.Item label="Active" valuePropName="checked" name='active'>
            <Checkbox />
          </Form.Item>

          <div >
            <Button onClick={onCancel}>Cancel</Button>
            <Button htmlType='submit' type='primary'>Confirm</Button>
          </div>
        </Form>
      </Modal>
    </div >
  )
}

export default ModalEditUser