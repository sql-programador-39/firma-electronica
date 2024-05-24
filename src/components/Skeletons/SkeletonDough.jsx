import ContentLoader from 'react-content-loader'

const SkeletonDough = ({radius, viewBox, props}) => {
  return (
    <ContentLoader 
      viewBox={viewBox}
      height="100%" 
      width="100%"
      speed={2}
      backgroundColor="#dadada"
      foregroundColor="#f3f3f3"
      {...props}
      >
      <circle cx="50%" cy="50%" r={radius} />
    </ContentLoader>
  )
}

export default SkeletonDough