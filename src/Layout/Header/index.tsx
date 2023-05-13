import Logo from "../../assets/Logo.svg";
import * as Styled from "./styles.ts"

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Container>
        <Styled.Logo
          src={Logo}
          title="Todo 🚀 | Organize suas tarefas com facilidade"
          alt="Todo 🚀 | Organize suas tarefas com facilidade"
          draggable={false}
        />
      </Styled.Container>
    </Styled.Header>
  )
}
