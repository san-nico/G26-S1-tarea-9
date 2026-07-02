import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? theme.colors?.primary || "#2563eb" : "#cbd5e1"};

  transition: all 0.3s ease;
`;
