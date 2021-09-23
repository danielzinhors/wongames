import * as S from './styles'

export type GridProps = {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => <S.Grid>{children}</S.Grid>

export default Grid
