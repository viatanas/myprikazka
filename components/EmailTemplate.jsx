import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Img,
  Text,
  Link,
  Hr,
} from "@react-email/components";
import * as React from "react";

const EmailTemplate = ({ childName, childGender, childAge, email, phone }) => {
  const genderText = childGender === "boy" ? "момче" : "момиче";

  return (
    <Html>
      <Head>
        <style>{`
          @media only screen and (max-width: 600px) {
            .container {
              padding: 20px 0px !important;
            }
            .header {
              padding: 20px !important;
            }
            .content {
              padding: 20px !important;
            }
            .footer {
              padding: 20px !important;
            }
            .detailsBox {
              padding: 12px 16px !important;
            }
          }
        `}</style>
      </Head>
      <Body style={main}>
        <Container style={container} className="container">
          {/* Header */}
          <Section style={header} className="header">
            <Img
              src="https://myprikazka.com/img/logo.png"
              alt="MyPrikazka"
              width="160"
              style={logo}
            />
          </Section>

          {/* Body */}
          <Section style={content} className="content">
            <Text style={heading}>Нова заявка за книжка! 📚</Text>
            <Text style={paragraph}>
              Получихме нова заявка за персонализирана книжка. Ето детайлите:
            </Text>

            {/* Details Table */}
            <Section style={detailsBox} className="detailsBox">
              <Row style={tableRow}>
                <Column style={labelCell}>
                  <Text style={label}>Име:</Text>
                </Column>
                <Column style={valueCell}>
                  <Text style={value}>{childName}</Text>
                </Column>
              </Row>
              <Hr style={rowDivider} />

              <Row style={tableRow}>
                <Column style={labelCell}>
                  <Text style={label}>Пол:</Text>
                </Column>
                <Column style={valueCell}>
                  <Text style={value}>{genderText}</Text>
                </Column>
              </Row>
              <Hr style={rowDivider} />

              <Row style={tableRow}>
                <Column style={labelCell}>
                  <Text style={label}>Възраст:</Text>
                </Column>
                <Column style={valueCell}>
                  <Text style={value}>{childAge} години</Text>
                </Column>
              </Row>
              <Hr style={rowDivider} />

              <Row style={tableRow}>
                <Column style={labelCell}>
                  <Text style={label}>Имейл:</Text>
                </Column>
                <Column style={valueCell}>
                  <Link href={`mailto:${email}`} style={link}>
                    {email}
                  </Link>
                </Column>
              </Row>
              <Hr style={rowDivider} />

              <Row style={tableRow}>
                <Column style={labelCell}>
                  <Text style={label}>Телефон:</Text>
                </Column>
                <Column style={valueCell}>
                  <Link href={`tel:${phone}`} style={link}>
                    {phone}
                  </Link>
                </Column>
              </Row>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer} className="footer">
            <Text style={footerText}>
              © {new Date().getFullYear()} MyPrikazka. Всички права запазени.
            </Text>
            <Text style={footerSubtext}>
              Това е автоматично генериран имейл.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "40px 20px",
};

const header = {
  backgroundColor: "#ffffff",
  borderRadius: "8px 8px 0 0",
  padding: "32px",
  textAlign: "center",
  borderBottom: "1px solid #eee",
};

const logo = {
  margin: "0 auto",
};

const content = {
  backgroundColor: "#ffffff",
  padding: "40px",
};

const heading = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#333",
  margin: "0 0 24px 0",
  textAlign: "center",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#555",
  margin: "0 0 24px 0",
  textAlign: "center",
};

const detailsBox = {
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  padding: "16px 24px",
  marginBottom: "24px",
};

const tableRow = {
  width: "100%",
};

const rowDivider = {
  borderColor: "#e0e0e0",
  margin: "0",
};

const labelCell = {
  width: "40%",
  paddingTop: "12px",
  paddingBottom: "12px",
};

const valueCell = {
  width: "60%",
  paddingTop: "12px",
  paddingBottom: "12px",
};

const label = {
  margin: "0",
  fontSize: "14px",
  fontWeight: "600",
  color: "#333",
};

const value = {
  margin: "0",
  fontSize: "14px",
  color: "#333",
};

const link = {
  color: "#333",
  textDecoration: "none",
  fontSize: "14px",
};

const note = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "#777",
  margin: "0",
  fontStyle: "italic",
};

const footer = {
  backgroundColor: "#f9f9f9",
  borderRadius: "0 0 8px 8px",
  padding: "24px 40px",
  borderTop: "1px solid #eee",
  textAlign: "center",
};

const footerText = {
  fontSize: "13px",
  color: "#999",
  margin: "0 0 8px 0",
};

const footerSubtext = {
  fontSize: "12px",
  color: "#bbb",
  margin: "0",
};
