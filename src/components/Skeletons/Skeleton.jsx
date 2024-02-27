
import ContentLoader from 'react-content-loader'

const PieChart2 = props => {
  return (
    <ContentLoader 
      viewBox="0 0 100% 100%" 
      height="100%" 
      width="100%"
      speed={2}
      backgroundColor="#e6e5e5"
      foregroundColor="#f3f3f3"
      {...props}
      >
      <rect x="50" y="5" rx="10" ry="10" width="400" height="33" />
      <circle cx="250" cy="260" r="160" />
      <rect x="50" y="60" rx="3" ry="3" width="30" height="15" />
      <rect x="85" y="60" rx="3" ry="3" width="80" height="15" />
      <rect x="195" y="60" rx="3" ry="3" width="30" height="15" />
      <rect x="230" y="60" rx="3" ry="3" width="80" height="15" />
      <rect x="335" y="60" rx="3" ry="3" width="30" height="15" />
      <rect x="370" y="60" rx="3" ry="3" width="80" height="15" />
    </ContentLoader>
  )
}

export default PieChart2