import { Avatar, Button } from 'antd';
import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import UpLoadImg from '../UpLoadImg';

import styles from './styles.module.scss';
import ModalEditUser from '../EditUser';

interface DataType {
  name: string;
  username: string;
  address: string;
  is_active: boolean;
  avatar: string;
  email: string;
}

function HomePage() {
  const [itemEdit, setItemEdit] = useState<any>(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const { data } = useUser();
  const dataSource = data?.data ?? [];

  const handleEditUser = (record: any) => {
    setItemEdit(record);
    setVisibleModal(true);
  }

  const columns: ColumnsType<DataType> = [
    {
      key: 'avatar',
      title: 'Avatar',
      render: (_: any, record: any) => {
        return (<Avatar src={record.avatar} ></Avatar>)
      }
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'username',
      title: 'UserName',
      dataIndex: 'username',
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: 'is_active',
      title: 'Active',
      dataIndex: 'is_active',
      render: (_: any, record: any) => {
        return (
          <div>
            {record.is_active ? <CheckOutlined /> : <CloseOutlined />}
          </div>
        )
      }
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: 'edit',
      title: '',
      dataIndex: 'edit',
      render: (_: any, record: any) => {
        return (<EditOutlined onClick={() => handleEditUser(record)} />)
      }
    },
  ];
  return (
    <div className={styles.tableUser}>
      <h1 className={styles.headerTable}>List User</h1>
      <Table className={styles.table} columns={columns} dataSource={dataSource} />
      <ModalEditUser open={visibleModal} record={itemEdit} setVisibleModal={setVisibleModal} />
    </div>
  )
};

export default HomePage;
