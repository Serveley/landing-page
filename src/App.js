import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Spa as SpaIcon,
  LocalCarWash as CarIcon,
  Plumbing as PlumbingIcon,
  ElectricalServices as ElectricIcon,
  ContentCut as CutIcon,
  CleaningServices as CleanIcon,
  Handyman as HandymanIcon,
  DirectionsCar as AutoIcon,
  LocalLaundryService as LaundryIcon,
  Pets as PetIcon,
  LocalFlorist as GardenIcon,
  CheckCircle as CheckIcon,
  Apple as AppleIcon,
  Shop as PlayStoreIcon,
} from '@mui/icons-material';

const SERVICES = [
  { icon: <SpaIcon />, name: 'Massage Therapy', category: 'Personal Care' },
  { icon: <CarIcon />, name: 'Car Cleaning', category: 'Automotive' },
  { icon: <CleanIcon />, name: 'Shoe Cleaning', category: 'Cleaning' },
  { icon: <PlumbingIcon />, name: 'Plumbing', category: 'Home Services' },
  { icon: <ElectricIcon />, name: 'Electrical', category: 'Home Services' },
  { icon: <CutIcon />, name: 'Hair Styling', category: 'Beauty' },
  { icon: <HandymanIcon />, name: 'Carpentry', category: 'Home Services' },
  { icon: <CleanIcon />, name: 'Home Cleaning', category: 'Cleaning' },
  { icon: <AutoIcon />, name: 'Mechanic Service', category: 'Automotive' },
  { icon: <LaundryIcon />, name: 'Laundry', category: 'Cleaning' },
  { icon: <PetIcon />, name: 'Pet Grooming', category: 'Other' },
  { icon: <GardenIcon />, name: 'Gardening', category: 'Other' },
];

const FEATURES = [
  { title: 'Find Local Vendors', desc: 'Discover trusted service providers in your neighborhood' },
  { title: 'Easy Booking', desc: 'Book services with just a few taps on your phone' },
  { title: 'Real-time Tracking', desc: 'Track vendor location and service status in real-time' },
  { title: 'Verified Reviews', desc: 'Read authentic reviews from verified customers' },
  { title: 'Secure Payments', desc: 'Pay securely through the app with multiple options' },
  { title: '24/7 Support', desc: 'Round-the-clock customer support for all your needs' },
];

const STEPS = [
  { number: '1', title: 'Choose a Service', desc: 'Browse through 35+ service categories' },
  { number: '2', title: 'Find Vendors', desc: 'See local vendors available near you' },
  { number: '3', title: 'Book & Relax', desc: 'Schedule and let the experts handle the rest' },
];

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography variant="h5" fontWeight="bold" color="primary" sx={{ flexGrow: 1 }}>
            Serveley
          </Typography>
          {isMobile ? (
            <IconButton>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button href="#services">Services</Button>
              <Button href="#how-it-works">How It Works</Button>
              <Button variant="contained" color="primary">
                Get the App
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" fontWeight="bold" gutterBottom>
                Your Local Services,
                <br />
                Simplified.
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Connect with trusted local vendors for all your service needs.
                From home repairs to personal care, find it all in one place.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AppleIcon />}
                  sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                >
                  App Store
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayStoreIcon />}
                  sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                >
                  Play Store
                </Button>
              </Box>
              <Box sx={{ mt: 4, display: 'flex', gap: 3 }}>
                <Box>
                  <Typography variant="h4" fontWeight="bold">35+</Typography>
                  <Typography variant="body2">Services</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight="bold">1000+</Typography>
                  <Typography variant="body2">Vendors</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight="bold">50K+</Typography>
                  <Typography variant="body2">Happy Users</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  p: 4,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Grid container spacing={2}>
                  {SERVICES.slice(0, 6).map((service, idx) => (
                    <Grid item xs={6} key={idx}>
                      <Card sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                          {React.cloneElement(service.icon, { sx: { fontSize: 40, mb: 1 } })}
                          <Typography variant="body2">{service.name}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom>
            Services We Offer
          </Typography>
          <Typography variant="h6" textAlign="center" color="textSecondary" sx={{ mb: 6 }}>
            From home maintenance to personal care, we have got you covered
          </Typography>
          <Grid container spacing={3}>
            {SERVICES.map((service, idx) => (
              <Grid item xs={6} sm={4} md={3} key={idx}>
                <Card sx={{ height: '100%', textAlign: 'center', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
                  <CardContent>
                    <Box sx={{ color: 'primary.main', mb: 2 }}>
                      {React.cloneElement(service.icon, { sx: { fontSize: 48 } })}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight="medium">
                      {service.name}
                    </Typography>
                    <Chip label={service.category} size="small" color="primary" variant="outlined" />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box id="how-it-works" sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="h6" textAlign="center" color="textSecondary" sx={{ mb: 6 }}>
            Get your service done in 3 simple steps
          </Typography>
          <Grid container spacing={4}>
            {STEPS.map((step, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        fontSize: 24,
                        fontWeight: 'bold',
                      }}
                    >
                      {step.number}
                    </Box>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      {step.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {step.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features */}
      <Box sx={{ py: 8, bgcolor: 'grey.900', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom>
            Why Choose Serveley?
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, opacity: 0.8 }}>
            We make finding and booking local services effortless
          </Typography>
          <Grid container spacing={3}>
            {FEATURES.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckIcon color="primary" />
                  <Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {feature.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Download the app now and discover local services near you
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AppleIcon />}
              sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
            >
              Download for iOS
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayStoreIcon />}
              sx={{ bgcolor: 'white', color: 'primary.main', px: 4 }}
            >
              Download for Android
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: 'grey.100', textAlign: 'center' }}>
        <Container>
          <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
            Serveley
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Your trusted local service marketplace. Connecting you with the best vendors in your area.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            © 2024 Serveley. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
