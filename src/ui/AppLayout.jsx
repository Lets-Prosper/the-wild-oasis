import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  min-width: 100%;
`;

const Container = styled.div`
  background-color: var(--color-grey-50);

  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-y: scroll;

  /* width and height for the scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  /* track */
  ::-webkit-scrollbar-track {
    background: var(--color-grey-50);
  }

  /* handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-grey-300);
    border-radius: 6px;
  }

  /* handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-400);
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
