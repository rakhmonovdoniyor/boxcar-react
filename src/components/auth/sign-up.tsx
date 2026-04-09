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

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { isAuthenticated, signIn } = useAppSession();
  const [fullName, setFullName] = useState("Ali Tufan");
  const [email, setEmail] = useState("ali.tufan@boxcars.com");
  const [password, setPassword] = useState("demo12345");
  const [acceptedTerms, setAcceptedTerms] = useState(true);
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
              <AuthKicker>Create Account</AuthKicker>
              <AuthTitle>Open a dashboard profile and keep your listing flow in one place.</AuthTitle>
            </div>

            <AuthCopy>
              This is still a demo flow, but sign up now creates a local session immediately
              so the dashboard, add listing, and profile screens feel continuous.
            </AuthCopy>

            <AuthStats>
              <AuthStat>
                <AuthStatValue>3 steps</AuthStatValue>
                <AuthStatLabel>Name, email, password. That is enough to open the demo dashboard.</AuthStatLabel>
              </AuthStat>
              <AuthStat>
                <AuthStatValue>Local</AuthStatValue>
                <AuthStatLabel>Your session stays on this browser through local storage.</AuthStatLabel>
              </AuthStat>
              <AuthStat>
                <AuthStatValue>Direct</AuthStatValue>
                <AuthStatLabel>After sign up you go straight back to the requested route.</AuthStatLabel>
              </AuthStat>
            </AuthStats>
          </AuthShowcase>

          <AuthFormCard>
            <AuthFormIntro>
              <AuthFormTitle>Sign Up</AuthFormTitle>
              <AuthFormCopy>
                Create a local demo account and continue into the protected dashboard flow.
              </AuthFormCopy>
            </AuthFormIntro>

            {errorMessage ? <AuthNotice $tone="error">{errorMessage}</AuthNotice> : null}

            <AuthForm
              onSubmit={(event) => {
                event.preventDefault();

                if (!fullName.trim() || !email.trim() || !password.trim()) {
                  setErrorMessage("Name, email, and password are required.");
                  return;
                }

                if (password.trim().length < 6) {
                  setErrorMessage("Password must be at least 6 characters.");
                  return;
                }

                if (!acceptedTerms) {
                  setErrorMessage("You need to accept the demo terms to continue.");
                  return;
                }

                setErrorMessage("");
                signIn({ name: fullName, email, password });
                navigate(redirectTarget, { replace: true });
              }}
            >
              <AuthField>
                <span>Full Name</span>
                <input value={fullName} onChange={(event) => setFullName(event.target.value)} />
              </AuthField>

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
                  <input
                    checked={acceptedTerms}
                    type="checkbox"
                    onChange={(event) => setAcceptedTerms(event.target.checked)}
                  />
                  <span>I accept the demo terms and privacy notice</span>
                </AuthCheckbox>
              </AuthMetaRow>

              <AuthPrimaryButton type="submit">Create Account</AuthPrimaryButton>
            </AuthForm>

            <AuthHint>
              Redirect target: <strong>{redirectTarget}</strong>
            </AuthHint>
            <AuthInlineLinks>
              <span>Already have an account?</span>
              <AuthLink to={`/sign-in?redirect=${encodeURIComponent(redirectTarget)}`}>
                Sign in
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

export default SignUpPage;
