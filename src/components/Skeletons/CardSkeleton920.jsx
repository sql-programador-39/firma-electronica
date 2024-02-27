import ContentLoader from 'react-content-loader'

const CardSkelenton920 = props => {
  return (
    <ContentLoader 
      viewBox="0 0 1017 600" 
      height="100%" 
      width="100%"
      speed={2}
      backgroundColor="#dadada"
      foregroundColor="#f3f3f3"
      {...props}
      >
      <rect x="10" y="10" rx="10" ry="10" width="48%" height="180" />
      <rect x="520" y="10" rx="10" ry="10" width="48%" height="180" />
      <rect x="520" y="210" rx="10" ry="10" width="48%" height="180" />
      <rect x="10" y="210" rx="10" ry="10" width="48%" height="180" />
      <rect x="10" y="410" rx="10" ry="10" width="48%" height="180" />
    </ContentLoader>
  )
}

export default CardSkelenton920