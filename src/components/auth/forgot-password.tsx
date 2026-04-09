import React, { useState } from "react";
import { Navigate } from "react-router-dom";

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
  AuthCopy,
  AuthField,
  AuthForm,
  AuthFormCard,
  AuthFormCopy,
  AuthFormIntro,
  AuthFormTitle,
  AuthHeroShell,
  AuthInlineLinks,
  AuthKicker,
  AuthLink,
  AuthMain,
  AuthNotice,
  AuthPageShell,
  AuthPrimaryButton,
  AuthSecondaryLink,
  AuthShowcase,
  AuthStat,
  AuthStatLabel,
  AuthStatValue,
  AuthStats,
  AuthSurface,
  AuthTitle,
} from "../../style/auth/authStyle";

const ForgotPasswordPage = () => {
  const { isAuthenticated } = useAppSession();
  const [email, setEmail] = useState("ali.tufan@boxcars.com");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
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
              <AuthKicker>Password Reset</AuthKicker>
              <AuthTitle>Recover access and return to the dashboard flow quickly.</AuthTitle>
            </div>

            <AuthCopy>
              This demo does not send a real email, but it does show the full reset state so
              the authentication flow is no longer a dead end.
            </AuthCopy>

            <AuthStats>
              <AuthStat>
                <AuthStatValue>1 field</AuthStatValue>
                <AuthStatLabel>Only your email is needed for the reset request screen.</AuthStatLabel>
              </AuthStat>
              <AuthStat>
                <AuthStatValue>Instant</AuthStatValue>
                <AuthStatLabel>The success feedback appears immediately after submit.</AuthStatLabel>
              </AuthStat>
              <AuthStat>
                <AuthStatValue>Return</AuthStatValue>
                <AuthStatLabel>Continue back into sign in once the reset request is shown.</AuthStatLabel>
              </AuthStat>
            </AuthStats>
          </AuthShowcase>

          <AuthFormCard>
            <AuthFormIntro>
              <AuthFormTitle>Forgot Password</AuthFormTitle>
              <AuthFormCopy>
                Enter your email and the demo will show a reset confirmation state.
              </AuthFormCopy>
            </AuthFormIntro>

            {errorMessage ? <AuthNotice $tone="error">{errorMessage}</AuthNotice> : null}
            {successMessage ? <AuthNotice>{successMessage}</AuthNotice> : null}

            <AuthForm
              onSubmit={(event) => {
                event.preventDefault();

                if (!email.trim()) {
                  setErrorMessage("Email is required.");
                  setSuccessMessage("");
                  return;
                }

                setErrorMessage("");
                setSuccessMessage(
                  `A demo reset link has been prepared for ${email.trim()}. Use Sign In to continue.`
                );
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

              <AuthPrimaryButton type="submit">Send Reset Link</AuthPrimaryButton>
            </AuthForm>

            <AuthInlineLinks>
              <AuthSecondaryLink to="/sign-in">Back To Sign In</AuthSecondaryLink>
              <AuthLink to="/sign-up">Create a new account</AuthLink>
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

export default ForgotPasswordPage;
