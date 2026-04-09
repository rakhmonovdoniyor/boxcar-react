import styled from "styled-components";

export const SidebarMain = styled.main`
  margin-top: -54px;
  padding: 0 clamp(20px, 4vw, 56px) 0;
`;

export const SidebarSurface = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px clamp(22px, 4vw, 36px) 54px;
  border-radius: 34px;
  background: #ffffff;
`;

export const SidebarLayout = styled.div`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 28px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const SidebarFiltersPanel = styled.aside`
  display: grid;
  gap: 18px;
  padding-right: 10px;

  @media (max-width: 980px) {
    padding-right: 0;
  }
`;

export const SidebarFiltersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const SidebarFiltersTitle = styled.h3`
  margin: 0;
  color: #050b20;
  font-size: 18px;
`;

export const SidebarResetButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: #405ff2;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
`;

export const SidebarSection = styled.section`
  display: grid;
  gap: 12px;
  padding-bottom: 18px;
  border-bottom: 1px solid #edf1f6;
`;

export const SidebarSectionTitle = styled.div`
  color: #050b20;
  font-size: 14px;
  font-weight: 800;
`;

export const SidebarOptionList = styled.div`
  display: grid;
  gap: 10px;
`;

export const SidebarOptionLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #526079;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  input {
    accent-color: #405ff2;
  }
`;

export const SidebarHint = styled.div`
  color: #90a0be;
  font-size: 13px;
  line-height: 1.6;
`;

export const SidebarContent = styled.div`
  display: grid;
  gap: 24px;
`;
