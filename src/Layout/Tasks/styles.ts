import styled, { css } from "styled-components";

export const Input = styled.input`
  grid-area: input;

  font-size: 1rem;
  ${({ theme }) => css`
    font-weight: ${theme.font_weight.light};
    background-color: ${theme.colors.gray_500};
    border: 2px solid ${theme.colors.gray_700};
    color: ${theme.colors.gray_300};
  `}

  padding: 1rem;
  border-radius: 8px;
`;

export const Button = styled.button`
  grid-area: button;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  font-size: 1rem;
  ${({ theme }) => css`
    font-weight: ${theme.font_weight.bold};
    background-color: ${theme.colors.blue_dark};
    color: ${theme.colors.gray_100};
  `}

  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const Created = styled.div`
  margin-top: 2rem;

  grid-area: created;
  display: flex;
  align-items: center;

  gap: 4px;
`;

export const CreatedText = styled.span`
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.font_weight.bold};
  color: ${({ theme }) => theme.colors.blue};
`;

export const Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  font-size: 0.875rem;

  ${({ theme }) => css`
    font-weight: ${theme.font_weight.bold};
    color: ${theme.colors.gray_200};
    background-color: ${theme.colors.gray_400};
  `}

  padding: 12px;
  border-radius: 50px;
`;

export const Done = styled.div`
  grid-area: done;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DoneText = styled.div`
  font-size: 1.125rem;
  font-weight: ${({ theme }) => theme.font_weight.bold};
  color: ${({ theme }) => theme.colors.purple};
`;

export const Tasks = styled.div`
  grid-area: tasks;
  margin-top: 1rem;
  padding: 2rem 0;

  border-top: 1px solid ${({ theme }) => theme.colors.gray_300};
`;

export const EmptyTasks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 2.175rem;
`;

export const EmptyTitle = styled.h1`
  font-size: 1.175rem;
  font-weight: ${({ theme }) => theme.font_weight.bold};
  color: ${({ theme }) => theme.colors.gray_300};
  margin: 4px 0;
  text-align: center;
`;

export const EmptyDescription = styled.p`
  font-size: 1.175rem;
  font-weight: ${({ theme }) => theme.font_weight.medium};
  color: ${({ theme }) => theme.colors.gray_300};
  text-align: center;
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  background-color: ${({ theme }) => theme.colors.gray_500};

  padding: 2rem;
  margin-bottom: 1rem;

  border-radius: 12px;
`;

export const DeleteTask = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray_300};
  background-color: transparent !important;
  transition: .3s ease-in-out;

  :hover {
    background-color: transparent !important;
    color: ${({ theme }) => theme.colors.danger};
    transition: .3s ease-in-out;
  }
`;

export const TaskInput = styled.input`
  border-radius: 12px;
  border: 0;
  cursor: pointer;
`;

export const TaskTitle = styled.span`
  width: 100%;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.font_weight.medium};
  color: ${({ theme }) => theme.colors.gray_100};

  transition: .4s ease-in-out;
`;

export const Container = styled.section`
  max-width: 60rem;
  margin: 32px auto;
  margin-top: -45px;
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr minmax(120px, max-content);
  grid-template-areas:
    "input button"
    "created done"
    "tasks tasks";
  gap: 0.5rem;

  /* Responsive */

  @media only screen and (max-width: 728px){
    grid-template-areas:
    "input input"
    "button button"
    "created done"
    "tasks tasks";
  }
`;

