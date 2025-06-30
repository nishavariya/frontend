import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Chip,
  Rating,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PricingDetail = () => {
  const { slug } = useParams();

  const packageDetails = {
    silver: {
      title: "Silver Package",
      price: "$35",
      duration: "30 minutes",
      rating: 3.5,
      description:
        "Perfect for basic maintenance and routine check-ups. Ideal for small cars and those seeking affordable servicing.",
      features: [
        "Conventional Oil Change",
        "Visual Brake Inspection",
        "24/7 Customer Service",
      ],
      note: "Does not include any engine or transmission fluid replacements.",
    },
    platinum: {
      title: "Platinum Package",
      price: "$69",
      duration: "90 minutes",
      rating: 5,
      description:
        "A complete service plan with all essential and premium features. Best for those who want total care and premium service.",
      features: [
        "Conventional Oil Change",
        "Fuel System Cleaning",
        "Coolant Exchange",
        "Transmission Fluid Service",
        "Visual Brake Inspection",
        "24/7 Customer Service",
      ],
      note: "Highly recommended for long trips or annual deep service.",
    },
    gold: {
      title: "Gold Package",
      price: "$39",
      duration: "60 minutes",
      rating: 4,
      description:
        "Includes all vital services for better engine performance. Great value for family cars and regular travelers.",
      features: [
        "Conventional Oil Change",
        "Coolant Exchange",
        "Transmission Fluid Service",
        "24/7 Customer Service",
      ],
      note: "Does not include brake replacement or fuel cleaning.",
    },
  };

  const selectedPackage = packageDetails[slug];

  if (!selectedPackage) {
    return (
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" color="error">
          Package not found!
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" fontWeight="bold">
            {selectedPackage.title}
          </Typography>
          <Typography variant="h5" sx={{ color: "#d90429", mt: 1 }}>
            {selectedPackage.price}
          </Typography>
          <Chip
            label={selectedPackage.duration}
            color="primary"
            variant="outlined"
            sx={{ mt: 1 }}
          />
          <Box mt={1}>
            <Rating
              name="read-only"
              value={selectedPackage.rating}
              precision={0.5}
              readOnly
            />
            <Typography variant="body2" color="text.secondary">
              Customer Rating: {selectedPackage.rating} / 5
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Description:
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          {selectedPackage.description}
        </Typography>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          What’s Included:
        </Typography>
        <Box component="ul" sx={{ pl: 3 }}>
          {selectedPackage.features.map((feature, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <CheckCircleIcon sx={{ color: "green", mr: 1 }} />
              <Typography>{feature}</Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="error" fontStyle="italic">
          Note: {selectedPackage.note}
        </Typography>
      </Paper>
    </Container>
  );
};

export default PricingDetail;
