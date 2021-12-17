import { rest } from 'msw'

type LoginReqBody = {
  email: string
}
//onde intercepta as chamadas rest
export const handlers = [
  rest.post<LoginReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    (req, res, ctx) => {
      const { email } = req.body
      //teste de erro
      if (email === 'false@email.com') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'This email does not exist'
                  }
                ]
              }
            ]
          })
        )
      }
      //teste de sucesso
      return res(
        ctx.status(200),
        ctx.json({
          ok: true
        })
      )
    }
  )
]
