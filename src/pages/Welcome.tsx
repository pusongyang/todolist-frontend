import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert } from 'antd';
import styles from './Welcome.less';

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="恭喜你成功部署了极客时间Serverless的Web应用"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer" href="https://pro.ant.design/docs/block">
          这是我们第一个的应用例子，你可以用常用的开发工具IDE，打开index.js查看里面的内容
        </a>
      </Typography.Text>
      <CodePreview> index.js</CodePreview>
      <Typography.Text
        strong
        style={{
          marginBottom: 12,
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pro.ant.design/docs/available-script#npm-run-fetchblocks"
        >
          如果你想部署到阿里云的函数服务，可以使用index-faas.js
        </a>
      </Typography.Text>
      <CodePreview> index-faas.js</CodePreview>
    </Card>
  </PageHeaderWrapper>
);
