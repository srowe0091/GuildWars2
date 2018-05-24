import styled from 'styled-components'

export const Bubble = styled.div`
  text-align: center;
  width: 200px;
  margin: 1rem 0.3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 20px;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.primaryDark1};
  ${({ theme }) => theme.generators.boxShadow(0, 0, 20, -3, '#000')}

  * { z-index: 5; }

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryLight1};
    ${({ theme }) => theme.generators.textShadow(0, 0, 5, 'rgba(0,0,0,1)')};
  }

  .emblem {
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 0;
    opacity: 0.5;
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
  }  
`