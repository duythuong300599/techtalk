import { Button } from 'antd';
import React from 'react';
import { useUser } from '../../hooks/useUser';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface DataType {
  name: string;
  username: string;
  address: string;
  is_active: boolean;
  avatar: string;
  email: string;
}

function HomePage() {
  const { data } = useUser();
  const dataSource = data?.data ?? [];

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'UserName',
      dataIndex: 'username',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
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
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
};

export default HomePage;
