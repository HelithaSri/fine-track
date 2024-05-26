import React from "react";
import { Container, Typography, Box, Link, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareYoutube,
  FaLinkedin,
  FaPhoneVolume,
} from "react-icons/fa6";

// Create a styled footer using Tailwind CSS classes
const FooterContainer = styled(Box)`
  @apply bg-gray-800 w-[100%] text-white py-6 mt-8;
`;

const Footer = ({ children }) => {
  return (
    <FooterContainer className="w-full">
      <Container maxWidth="false" className="my-0 p-0 bg-[#3344A1]">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          className="h-20"
        >
          <Box
            // display="flex"
            // justifyContent="space-between"
            // alignItems="center"
            // flexWrap="wrap"
            className="w-fit gap-3 flex flex-row"
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareFacebook size={36} style={{ color: "white" }} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={36} style={{ color: "white" }} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={36} style={{ color: "white" }} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareYoutube size={36} style={{ color: "white" }} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={36} style={{ color: "white" }} />
            </Link>
          </Box>

          <Box className="w-fit gap-8 flex flex-row">
            {children}
            <Typography
              variant="body1"
              align="right"
              className="flex items-center gap-2"
              fontSize={30}
              color={"white"}
            >
              <FaPhoneVolume size={36} style={{ color: "white" }} /> Help Desk -
              1415
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
