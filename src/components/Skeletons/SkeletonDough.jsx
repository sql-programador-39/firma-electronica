
import ContentLoader from 'react-content-loader'

const SkeletonDough = props => {
  return (
    <ContentLoader 
      viewBox="0 0 496 280" 
      height="100%" 
      width="100%"
      speed={2}
      backgroundColor="#dadada"
      foregroundColor="#f3f3f3"
      {...props}
      >
      <circle cx="250" cy="140" r="35%" />
    </ContentLoader>
  )
}

export default SkeletonDough