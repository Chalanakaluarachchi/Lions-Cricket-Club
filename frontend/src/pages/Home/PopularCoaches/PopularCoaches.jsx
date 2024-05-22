// pages/WhyChooseUs.js
import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import expertTeamImage from '../../../assets/gallary/image2.jpg';
import qualityServiceImage from '../../../assets/gallary/image3.jpg';

const WhyChooseUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" color="primary" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Discover the Reasons to Choose Our Services
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Feature 1 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardMedia
              component="img"
              height="200"
              image={expertTeamImage}
              alt="Expert Team"
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Expert Team
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Our team consists of experts in their respective fields, ensuring that you receive the best advice and service possible. We continuously train our team to stay updated with the latest industry trends.
              </Typography>
              <Typography component="ul">
                <Typography component="li" variant="body2" color="textSecondary">Highly skilled professionals</Typography>
                <Typography component="li" variant="body2" color="textSecondary">Years of experience</Typography>
                <Typography component="li" variant="body2" color="textSecondary">Continuous training and development</Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 2 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardMedia
              component="img"
              height="200"
              image={qualityServiceImage}
              alt="Quality Service"
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Quality Service
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                We are committed to providing high-quality services to our clients. Our approach focuses on understanding your needs and delivering solutions that exceed your expectations.
              </Typography>
              <Typography component="ul">
                <Typography component="li" variant="body2" color="textSecondary">Customer-centric approach</Typography>
                <Typography component="li" variant="body2" color="textSecondary">Attention to detail</Typography>
                <Typography component="li" variant="body2" color="textSecondary">High customer satisfaction rate</Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={8}>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default WhyChooseUs;
