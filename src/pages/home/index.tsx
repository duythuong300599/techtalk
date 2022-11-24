import { Button } from 'antd';
import React from 'react';
import HomePage from '../../components/Home';

function Home() {
  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '24px'
        }}
      >
        <Button size='large'>Logout</Button>
      </div>
      <HomePage />
    </div>
  )
}

export default Home;