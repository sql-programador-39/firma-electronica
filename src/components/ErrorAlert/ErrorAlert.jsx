import { Alert, Space } from 'antd';

const ErrorAlert = ({msg}) => {
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: '100%',
          margin: '10px 0'
        }}
      >
        <Alert
          message="Error"
          description={msg}
          type="error"
          showIcon
        />
      </Space>
    </>
  )
}

export default ErrorAlert
