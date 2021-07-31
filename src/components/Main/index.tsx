import * as S from './styles'

const Main = ({
  title = 'React avançado',
  description = 'TypeScript, ReactJs, NextJS, e Styled Components'
}) => (
  <main>
    <S.Whapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Desciption>{description}</S.Desciption>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente a uma tela com imagem"
      />
    </S.Whapper>
  </main>
)

export default Main
