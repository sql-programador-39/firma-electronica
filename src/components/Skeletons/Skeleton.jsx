
import ContentLoader from 'react-content-loader'

const PieChart2 = props => {
  return (
    <ContentLoader 
      viewBox="0 0 514 460" 
      height="100%" 
      width="100%"
      speed={2}
      backgroundColor="#dadada"
      foregroundColor="#f3f3f3"
      {...props}
      >
      <rect x="25" y="5" rx="10" ry="10" width="90%" height="33" />
      <circle cx="250" cy="280" r="35%" />
      <rect x="50" y="60" rx="3" ry="3" width="6%" height="15" />
      <rect x="85" y="60" rx="3" ry="3" width="15%" height="15" />
      <rect x="195" y="60" rx="3" ry="3" width="6%" height="15" />
      <rect x="230" y="60" rx="3" ry="3" width="15%" height="15" />
      <rect x="335" y="60" rx="3" ry="3" width="6%" height="15" />
      <rect x="370" y="60" rx="3" ry="3" width="15%" height="15" />
    </ContentLoader>
  )
}

export default PieChart2