import { render } from 'utils/test-utils'

import { FormWrapper, FormLink, LinkAux } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <FormWrapper>
        <FormLink>
          <LinkAux>My nice </LinkAux>
        </FormLink>
      </FormWrapper>
    )
    expect(container.parentElement).toMatchInlineSnapshot(`
.c0 {
  font-size: 1.4rem;
  color: #030517;
  text-align: center;
}

.c1 {
  color: #3CD3C1;
  -webkit-text-decoration: none;
  text-decoration: none;
  border-bottom: 0.1rem solid #3CD3C1;
  -webkit-transition: color,border,0.1s ease-in-out;
  transition: color,border,0.1s ease-in-out;
}

.c1:hover {
  color: #29b3a3;
  border-bottom: 0.1rem solid #29b3a3;
}

<body>
  <div>
    <div
      class=""
    >
      <div
        class="c0"
      >
        <a
          class="c1"
        >
          My nice 
        </a>
      </div>
    </div>
  </div>
</body>
`)
  })
})
