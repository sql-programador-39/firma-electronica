import ContentLoader from 'react-content-loader'

const CardSkelenton540 = props => {
  return (
    <ContentLoader 
      viewBox="0 0 1017 1000" 
      height="100%" 
      width="100%"
      speed={2}
      backgroundColor="#dadada"
      foregroundColor="#f3f3f3"
      {...props}
      >
      <rect x="10" y="10" rx="10" ry="10" width="98%" height="180" />
      <rect x="10" y="210" rx="10" ry="10" width="98%" height="180" />
      <rect x="10" y="410" rx="10" ry="10" width="98%" height="180" />
      <rect x="10" y="610" rx="10" ry="10" width="98%" height="180" />
      <rect x="10" y="810" rx="10" ry="10" width="98%" height="180" />
    </ContentLoader>
  )
}

export default CardSkelenton540