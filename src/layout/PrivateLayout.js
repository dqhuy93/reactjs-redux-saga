import React, { Suspense } from 'react';
import Header from '../components/header';
import { Layout, Spin } from 'antd';

export const PrivateLayout = props => (
  <Layout className="main-layout">
    <Header />
    <div className="main-container">
      <Suspense
        fallback={
          <Spin>
            <div className="is-spining" />
          </Spin>
        }
      >
        <div className="main-content">{props.children}</div>
      </Suspense>
    </div>
  </Layout>
);
