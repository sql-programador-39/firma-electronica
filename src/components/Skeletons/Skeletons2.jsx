
import ContentLoader from 'react-content-loader'

const CardSkelenton = props => {
  return (
    <ContentLoader 
      viewBox="0 0 1017 395" 
      height="100%" 
      width="100%"
      speed={2}
      backgroundColor="#dadada"
      foregroundColor="#f3f3f3"
      {...props}
      >
      <rect x="10" y="10" rx="10" ry="10" width="31.5%" height="180" />
      <rect x="348" y="10" rx="10" ry="10" width="31.5%" height="180" />
      <rect x="685" y="10" rx="10" ry="10" width="31.5%" height="370" />
      <rect x="10" y="210" rx="10" ry="10" width="31.5%" height="175" />
      <rect x="348" y="210" rx="10" ry="10" width="31.5%" height="175" />
    </ContentLoader>
  )
}

export default CardSkelenton