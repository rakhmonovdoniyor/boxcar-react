import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthPageShell = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at top right, rgba(64, 95, 242, 0.12), transparent 28%),
    linear-gradient(180deg, #f5f8ff 0%, #ffffff 34%);
`;

export const AuthHeroShell = styled.div`
  padding: 24px 32px 0;

  @media (max-width: 720px) {
    padding: 20px 18px 0;
  }
`;

export const AuthMain = styled.main`
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 32px 80px;

  @media (max-width: 720px) {
    padding: 24px 18px 60px;
  }
`;

export const AuthSurface = styled.section`
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(340px, 1.05fr);
  gap: 24px;
  padding: 24px;
  border-radius: 32px;
  background: #ffffff;
  box-shadow: 0 30px 90px rgba(12, 24, 54, 0.08);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 720px) {
    padding: 18px;
    border-radius: 24px;
  }
`;

export const AuthShowcase = styled.article`
  display: grid;
  gap: 20px;
  padding: 28px;
  border-radius: 26px;
  background:
    radial-gradient(circle at top left, rgba(64, 95, 242, 0.18), transparent 34%),
    linear-gradient(180deg, #0a112c 0%, #121d48 100%);
  color: #ffffff;
`;

export const AuthKicker = styled.div`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const AuthTitle = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
`;

export const AuthCopy = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 15px;
  line-height: 1.8;
`;

export const AuthStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
`;

export const AuthStat = styled.div`
  display: grid;
  gap: 6px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
`;

export const AuthStatValue = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

export const AuthStatLabel = styled.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 12px;
  line-height: 1.6;
`;

export const AuthFormCard = styled.article`
  display: grid;
  gap: 18px;
  padding: 28px;
  border-radius: 26px;
  border: 1px solid #e5ebf8;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
`;

export const AuthFormIntro = styled.div`
  display: grid;
  gap: 8px;
`;

export const AuthFormTitle = styled.h2`
  margin: 0;
  color: #050b20;
  font-size: 32px;
  line-height: 1.05;
  letter-spacing: -0.05em;
`;

export const AuthFormCopy = styled.p`
  margin: 0;
  color: #6d7b98;
  font-size: 14px;
  line-height: 1.7;
`;

export const AuthForm = styled.form`
  display: grid;
  gap: 14px;
`;

export const AuthField = styled.label`
  display: grid;
  gap: 8px;
  color: #0f1836;
  font-size: 13px;
  font-weight: 700;

  input {
    width: 100%;
    box-sizing: border-box;
    min-height: 48px;
    padding: 0 16px;
    border-radius: 16px;
    border: 1px solid #dfe7f6;
    background: #ffffff;
    color: #050b20;
    font: inherit;
  }

  input:focus {
    outline: none;
    border-color: #a9bbf6;
    box-shadow: 0 0 0 4px rgba(64, 95, 242, 0.1);
  }
`;

export const AuthMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const AuthCheckbox = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #66728d;
  font-size: 13px;
`;

export const AuthLink = styled(Link)`
  color: #405ff2;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
`;

export const AuthPrimaryButton = styled.button`
  min-height: 48px;
  border-radius: 16px;
  border: 0;
  background: #405ff2;
  color: #ffffff;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 18px 30px rgba(64, 95, 242, 0.2);
`;

export const AuthSecondaryLink = styled(Link)`
  min-height: 48px;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid #dfe7f6;
  background: #ffffff;
  color: #050b20;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const AuthNotice = styled.div<{ $tone?: "error" | "success" }>`
  padding: 12px 14px;
  border-radius: 14px;
  background: ${({ $tone }) =>
    $tone === "error" ? "rgba(239, 68, 68, 0.08)" : "rgba(64, 95, 242, 0.08)"};
  color: ${({ $tone }) => ($tone === "error" ? "#b42318" : "#405ff2")};
  font-size: 13px;
  line-height: 1.65;
`;

export const AuthHint = styled.div`
  color: #6d7b98;
  font-size: 13px;
  line-height: 1.7;
`;

export const AuthInlineLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  color: #6d7b98;
  font-size: 13px;
`;
