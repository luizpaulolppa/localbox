import { Navigate } from 'react-router-dom'
import { useToast } from '../../hooks/Toast'

type ProtectedPageProp = {
  children: React.ReactElement
}

function ProtectedPage({ children }: ProtectedPageProp) {
  const { showError } = useToast()
  const isSignedIn = localStorage.getItem('@isSignedIn') === 'true'

  if (!isSignedIn) {
    showError('Hey, you need to be logged to access this page.')
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedPage