import styled from 'styled-components'

export const DashBoardLayoutContainer = styled.section`
  display: grid;
  grid-template-areas:
    'sidebar header header'
    'sidebar main main'
    'sidebar main main';
  grid-template-columns: 300px 1fr 1fr;
  grid-template-rows: auto auto auto;
  overflow: hidden;

`

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  -webkit-box-shadow: -1px 1px 10px 1.5px #dddddd;
  -moz-box-shadow: -1px 1px 10px 1.5px #dddddd;
  box-shadow: -1px 1px 10px 1.5px #dddddd;
  min-height: 100vh;
  position: fixed;
  z-index: 10;
  background-color: var(--main-white);
`

export const HeaderContainer = styled.div`
  grid-area: header;
  width: 100%;
  height: 75px;
  background-color: #fb6373;
  color: var(--text-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 15px 380px;
  -webkit-box-shadow: -1px 1px 10px 1.5px #dddddd;
  -moz-box-shadow: -1px 1px 10px 1.5px #dddddd;
  box-shadow: -1px 1px 10px 1.5px #dddddd;
  position: fixed;
`

export const MainContainer = styled.div`
  grid-area: main;
  padding: 105px 75px;
  height: 100%;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  gap: 30px;
`