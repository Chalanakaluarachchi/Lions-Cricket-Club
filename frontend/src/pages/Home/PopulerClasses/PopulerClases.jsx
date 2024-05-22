import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import BuildIcon from '@mui/icons-material/Build';

const NewFeatures = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" component="h1" color="primary" gutterBottom>
          Our Features
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Explore the Benefits of Our Services
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Easy Payment */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Box textAlign="center" mb={2}>
                <PaymentIcon color="primary" sx={{ fontSize: 50 }} />
              </Box>
              <Typography variant="h5" component="div" gutterBottom>
                Easy Payment
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                We offer flexible and secure payment options to suit your needs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Access */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Box textAlign="center" mb={2}>
                <AccessTimeIcon color="primary" sx={{ fontSize: 50 }} />
              </Box>
              <Typography variant="h5" component="div" gutterBottom>
                Quick Access
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Fast and easy access to all our services and support.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Response */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Box textAlign="center" mb={2}>
                <QuickreplyIcon color="primary" sx={{ fontSize: 50 }} />
              </Box>
              <Typography variant="h5" component="div" gutterBottom>
                Quick Response
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                We ensure prompt responses to your queries and concerns.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* We Are Services */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Box textAlign="center" mb={2}>
                <BuildIcon color="primary" sx={{ fontSize: 50 }} />
              </Box>
              <Typography variant="h5" component="div" gutterBottom>
                We Are Services
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                Dedicated to providing top-notch services in all aspects.
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

export default NewFeatures;
