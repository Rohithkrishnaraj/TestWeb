import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import GavelIcon from "@mui/icons-material/Gavel";

export const TermsAndConditions = () => {
  return (
    <Box
      sx={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "#fff",
      }}
    >

      {/* 🔥 CONTENT */}
      <Container maxWidth="md" sx={{ py: 5 }}>

        <Box
          sx={{
            background: "#111",
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            border: "1px solid rgba(255,215,0,0.08)",
          }}
        >

          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 5,
            }}
          >
            <GavelIcon
              sx={{
                color: "gold",
                fontSize: 35,
              }}
            />

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Terms & Conditions
            </Typography>
          </Box>

          {/* LAST UPDATED */}
          <Typography
            sx={{
              color: "gold",
              fontWeight: 600,
              mb: 4,
            }}
          >
            Last updated on Dec 04 2023
          </Typography>

          {/* INTRO */}
          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2,
              mb: 3,
            }}
          >
            The Website Owner, including subsidiaries and affiliates
            (“Website” or “Website Owner” or “we” or “us” or “our”)
            provides the information contained on the website or any
            of the pages comprising the website (“website”) to visitors
            (“visitors”) subject to the terms and conditions set out
            in these website terms and conditions, the privacy policy,
            and any other relevant terms and conditions applicable to
            specific sections or modules of the website.
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2,
              mb: 3,
            }}
          >
            INVIKINGS is committed to ensuring that your privacy is
            protected. Any information provided while using this
            website will only be used in accordance with our privacy
            policy and applicable regulations.
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2,
              mb: 6,
            }}
          >
            INVIKINGS may update these policies and terms periodically.
            Users are encouraged to review this page regularly to stay
            informed about any modifications.
          </Typography>

          {/* 🔥 TERMS SECTION */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "gold",
                fontWeight: 700,
                mb: 4,
              }}
            >
              The use of this website is subject to the following terms:
            </Typography>

            {[
              "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",

              "Neither we nor any third parties provide any warranty or guarantee regarding the accuracy, timeliness, completeness, or suitability of the information and materials offered on this website.",

              "Your use of any information or materials on this website is entirely at your own risk. It is your responsibility to ensure that any products, services, or information available meet your specific requirements.",

              "This website contains material owned by or licensed to us. This includes, but is not limited to, the design, layout, appearance, and graphics. Reproduction is prohibited except in accordance with the copyright notice.",

              "All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.",

              "Unauthorized use of this website may give rise to claims for damages and/or criminal offenses.",

              "From time to time this website may include links to other websites. These links are provided for convenience and further information.",

              "You may not create a link to this website from another website or document without prior written consent from INVIKINGS.",

              "Your use of this website and any dispute arising out of such use is subject to the laws of India and relevant regulatory authorities.",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: "#161616",
                  p: 4,
                  borderRadius: 4,
                  mb: 3,
                  border: "1px solid rgba(255,215,0,0.08)",
                  transition: "0.3s",

                  "&:hover": {
                    borderColor: "rgba(255,215,0,0.25)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#aaa",
                    lineHeight: 2,
                  }}
                >
                  {index + 1}. {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 🔥 FINAL NOTE */}
          <Box
            sx={{
              mt: 7,
              background:
                "linear-gradient(to right, rgba(255,215,0,0.08), transparent)",
              p: 4,
              borderRadius: 4,
            }}
          >
            <Typography
              sx={{
                color: "#ddd",
                lineHeight: 2,
                fontStyle: "italic",
              }}
            >
              We as a merchant shall be under no liability whatsoever
              in respect of any loss or damage arising directly or
              indirectly out of the decline of authorization for any
              transaction on account of the cardholder having exceeded
              the preset limit mutually agreed by us with our acquiring
              bank from time to time.
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};