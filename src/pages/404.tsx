import Container from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty title="404 not found" hasLink />
      </Container>
    </Base>
  )
}
