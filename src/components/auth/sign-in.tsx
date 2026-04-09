import React, { useMemo, useState } from "react";
import { Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import { useAppSession } from "./app-session";
import {
  AuthCheckbox,
  AuthCopy,
  AuthField,
  AuthForm,
  AuthFormCard,
  AuthFormCopy,
  AuthFormIntro,
  AuthFormTitle,
  AuthHeroShell,
  AuthHint,
  AuthInlineLinks,
  AuthKicker,
  AuthLink,
  AuthMain,
  AuthMetaRow,
  AuthNotice,
  AuthPageShell,
  AuthPrimaryButton,
  AuthShowcase,
  AuthStat,
  AuthStatLabel,
  AuthStatValue,
  AuthStats,
  AuthSurface,
  AuthTitle,
} from "../../style/auth/authStyle";

const SignInPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { isAuthenticated, signIn } = useAppSession();
  const [email, setEmail] = useState("ali.tufan@boxcars.com");
  const [password, setPassword] = useState("demo12345");
  const [errorMessage, setErrorMessage] = useState("");

  const redirectTarget = useMemo(() => {
    const stateTarget =
      (location.state as { from?: { pathname?: string; search?: string } } | null)?.from;
    const queryTarget = searchParams.get("redirect");

    return (
      queryTarget ||
      (stateTarget?.pathname
        ? `${stateTarget.pathname}${stateTarget.search ?? ""}`
        : "/dashboard")
    );
  }, [location.state, searchParams]);

  if (isAuthenticated) {
    return <Navigate replace to={redirectTarget} />;
  }

  return (
    <AuthPageShell>
      <AuthHeroShell>
        <SiteHeader navLinks={navLinks} />
      </AuthHeroShell>

      <AuthMain>
        <AuthSurface>
          <AuthShowcase>
            <div>
              <AuthKicker>Dashboard Access</AuthKicker>
              <AuthTitle>Manage listings, messages, favorites, and profile tools.</AuthTitle>
            </div>

            <AuthCopy>
              This build uses a demo sign-in flow. Once you enter the dashboard, add
              listing, logout, and sidebar routes stay connected through local session
              state.
            </AuthCopy>

            <AuthStats>
              <AuthStat>
                <AuthStatValue>43K+</AuthStatValue>
                <AuthStatLabel>Listings already managed inside the dashboard shell.</AuthStatLabel>
              </AuthStat>
              <AuthStat>
                <AuthStatValue>15</AuthStatValue>
                <AuthStatLabel>Live message threads shown in the current demo inbox.</AuthStatLabel>
              </AuthStat>
              <AuthStat>
                <AuthStatValue>1 tap</AuthStatValue>
                <AuthStatLabel>Direct path back into add-listing and inventory workflows.</AuthStatLabel>
              </AuthStat>
            </AuthStats>
          </AuthShowcase>

          <AuthFormCard>
            <AuthFormIntro>
              <AuthFormTitle>Sign In</AuthFormTitle>
              <AuthFormCopy>
                Use the demo credentials below or replace them with any non-empty email and
                password. After sign-in you will return to your requested route.
              </AuthFormCopy>
            </AuthFormIntro>

            {errorMessage ? <AuthNotice $tone="error">{errorMessage}</AuthNotice> : null}
            <AuthNotice>
              Demo default: <strong>ali.tufan@boxcars.com</strong> / <strong>demo12345</strong>
            </AuthNotice>

            <AuthForm
              onSubmit={(event) => {
                event.preventDefault();

                if (!email.trim() || !password.trim()) {
                  setErrorMessage("Email and password are required.");
                  return;
                }

                setErrorMessage("");
                signIn({ email, password });
                navigate(redirectTarget, { replace: true });
              }}
            >
              <AuthField>
                <span>Email Address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </AuthField>

              <AuthField>
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </AuthField>

              <AuthMetaRow>
                <AuthCheckbox>
                  <input defaultChecked type="checkbox" />
                  <span>Keep me signed in on this device</span>
                </AuthCheckbox>
                <AuthLink to="/forgot-password">Forgot password?</AuthLink>
              </AuthMetaRow>

              <AuthPrimaryButton type="submit">Continue To Dashboard</AuthPrimaryButton>
            </AuthForm>

            <AuthHint>
              Redirect target: <strong>{redirectTarget}</strong>
            </AuthHint>
            <AuthInlineLinks>
              <span>No account yet?</span>
              <AuthLink to={`/sign-up?redirect=${encodeURIComponent(redirectTarget)}`}>
                Create an account
              </AuthLink>
            </AuthInlineLinks>
          </AuthFormCard>
        </AuthSurface>
      </AuthMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </AuthPageShell>
  );
};

export default SignInPage;
