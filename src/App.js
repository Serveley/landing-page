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
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ bgcolor: '#f8fafc' }}>
      {/* Navbar */}
      <AppBar 
        position="fixed" 
        elevation={0} 
        sx={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : 'none',
          transition: 'all 0.3s ease',
          py: 0.5,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography 
              variant="h5" 
              fontWeight="900" 
              color="primary" 
              sx={{ 
                flexGrow: 1, 
                fontFamily: '"Outfit", sans-serif',
                letterSpacing: '-1px',
                color: scrolled ? 'primary.main' : 'white',
                transition: 'color 0.3s ease',
              }}
            >
              Serveley
            </Typography>
            {isMobile ? (
              <IconButton sx={{ color: scrolled ? 'text.primary' : 'white' }}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button 
                  href="#services" 
                  sx={{ 
                    color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.85)', 
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { color: scrolled ? 'primary.main' : 'white' }
                  }}
                >
                  Services
                </Button>
                <Button 
                  href="#how-it-works" 
                  sx={{ 
                    color: scrolled ? 'text.secondary' : 'rgba(255,255,255,0.85)', 
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { color: scrolled ? 'primary.main' : 'white' }
                  }}
                >
                  How It Works
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  sx={{ 
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    background: scrolled ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' : 'white',
                    color: scrolled ? 'white' : 'primary.main',
                    '&:hover': {
                      background: scrolled ? 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)' : 'rgba(255,255,255,0.9)',
                      boxShadow: scrolled ? '0 4px 14px rgba(99,102,241,0.4)' : 'none',
                    }
                  }}
                >
                  Get the App
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, rgba(20, 184, 166, 0.05) 80%), #0f172a',
          color: 'white',
          pt: { xs: 12, md: 8 },
          pb: { xs: 8, md: 4 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                fontWeight="900" 
                gutterBottom
                sx={{ 
                  fontFamily: '"Outfit", sans-serif',
                  lineHeight: 1.1,
                  letterSpacing: '-2px',
                  fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4.25rem' }
                }}
              >
                Your Local Services,
                <br />
                <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #2dd4bf 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Simplified.
                </span>
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.85, fontWeight: '400', lineHeight: 1.6, fontSize: '1.1rem' }}>
                Connect with vetted, top-rated local professionals for home repairs, wellness, cleaning, and more. Transparent pricing, instant booking.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AppleIcon />}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.08)', 
                    color: 'white', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    px: 3,
                    py: 1.5,
                    borderRadius: '12px',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.2)' } 
                  }}
                >
                  App Store
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayStoreIcon />}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.08)', 
                    color: 'white', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(8px)',
                    px: 3,
                    py: 1.5,
                    borderRadius: '12px',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.2)' } 
                  }}
                >
                  Play Store
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: { xs: 4, sm: 6 }, borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4 }}>
                <Box>
                  <Typography variant="h4" fontWeight="800" sx={{ fontFamily: '"Outfit", sans-serif', color: '#818cf8' }}>35+</Typography>
                  <Typography variant="caption" color="grey.400" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service Categories</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight="800" sx={{ fontFamily: '"Outfit", sans-serif', color: '#2dd4bf' }}>1,000+</Typography>
                  <Typography variant="caption" color="grey.400" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Verified Vendors</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight="800" sx={{ fontFamily: '"Outfit", sans-serif', color: 'white' }}>50K+</Typography>
                  <Typography variant="caption" color="grey.400" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Happy Bookings</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderRadius: '28px',
                  p: { xs: 3, sm: 4 },
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                }}
              >
                <Grid container spacing={2}>
                  {SERVICES.slice(0, 6).map((service, idx) => (
                    <Grid item xs={6} key={idx}>
                      <Card 
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.03)', 
                          border: '1px solid rgba(255,255,255,0.05)',
                          color: 'white',
                          borderRadius: '16px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            bgcolor: 'rgba(255,255,255,0.07)',
                            borderColor: 'rgba(99,102,241,0.2)',
                            boxShadow: '0 8px 24px rgba(99,102,241,0.15)',
                          }
                        }}
                      >
                        <CardContent sx={{ textAlign: 'center', p: 3 }}>
                          <Box sx={{ color: 'primary.light', mb: 1.5, display: 'inline-flex', p: 1, borderRadius: '12px', bgcolor: 'rgba(99,102,241,0.1)' }}>
                            {React.cloneElement(service.icon, { sx: { fontSize: 32 } })}
                          </Box>
                          <Typography variant="subtitle2" fontWeight="700" sx={{ fontSize: '0.85rem' }}>{service.name}</Typography>
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
      <Box id="services" sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            textAlign="center" 
            fontWeight="800" 
            gutterBottom
            sx={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-1.5px', mb: 1 }}
          >
            Services We Offer
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 8, maxW: 600, mx: 'auto', fontSize: '1.05rem' }}>
            From professional cleaning to standard home maintenance, find the perfect vetted vendor for any task.
          </Typography>
          <Grid container spacing={3}>
            {SERVICES.map((service, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    textAlign: 'center', 
                    p: 2,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
                    '&:hover': { 
                      transform: 'translateY(-6px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
                      borderColor: 'rgba(99,102,241,0.15)'
                    } 
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box 
                      sx={{ 
                        color: 'primary.main', 
                        mb: 2.5,
                        width: 72,
                        height: 72,
                        borderRadius: '50%',
                        bgcolor: 'rgba(99, 102, 241, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {React.cloneElement(service.icon, { sx: { fontSize: 36 } })}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight="700" sx={{ fontFamily: '"Outfit", sans-serif', mb: 1.5, fontSize: '1.15rem' }}>
                      {service.name}
                    </Typography>
                    <Chip 
                      label={service.category} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                      sx={{ fontWeight: '600', borderRadius: '6px' }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box id="how-it-works" sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            textAlign="center" 
            fontWeight="800" 
            gutterBottom
            sx={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-1.5px', mb: 1 }}
          >
            How It Works
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 8, maxW: 600, mx: 'auto', fontSize: '1.05rem' }}>
            Book the services you need in three simple, convenient steps
          </Typography>
          <Grid container spacing={4}>
            {STEPS.map((step, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card 
                  sx={{ 
                    textAlign: 'center', 
                    height: '100%', 
                    p: 2,
                    boxShadow: 'none',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    bgcolor: 'rgba(248, 250, 252, 0.3)',
                    '&:hover': {
                      boxShadow: '0 12px 24px rgba(0,0,0,0.03)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3,
                        fontSize: 20,
                        fontWeight: '800',
                        fontFamily: '"Outfit", sans-serif',
                        boxShadow: '0 8px 16px -4px rgba(99, 102, 241, 0.3)'
                      }}
                    >
                      {step.number}
                    </Box>
                    <Typography variant="h5" gutterBottom fontWeight="700" sx={{ fontFamily: '"Outfit", sans-serif', mb: 1.5 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {step.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: 10, bgcolor: '#0f172a', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h3" 
            textAlign="center" 
            fontWeight="800" 
            gutterBottom
            sx={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-1.5px', mb: 1 }}
          >
            Why Choose Serveley?
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ mb: 8, opacity: 0.7, maxW: 600, mx: 'auto' }}>
            We leverage technology to make hiring local service providers seamless and secure.
          </Typography>
          <Grid container spacing={4}>
            {FEATURES.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: 2, 
                    p: 3, 
                    borderRadius: '16px',
                    bgcolor: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.04)',
                    height: '100%',
                    transition: 'all 0.2s',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }
                  }}
                >
                  <CheckIcon color="secondary" sx={{ mt: 0.3 }} />
                  <Box>
                    <Typography variant="h6" gutterBottom fontWeight="700" sx={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.1rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.6 }}>
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
      <Box 
        sx={{ 
          py: 12, 
          background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', 
          color: 'white', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            top: '-20%',
            left: '-10%',
            filter: 'blur(50px)'
          }
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h3" 
            fontWeight="800" 
            gutterBottom
            sx={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-1.5px', mb: 2 }}
          >
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, opacity: 0.9, fontWeight: '400', maxW: 600, mx: 'auto', lineHeight: 1.6 }}>
            Download the user app today and discover vetted local professionals at your convenience.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AppleIcon />}
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main', 
                px: 4, 
                py: 1.8, 
                borderRadius: '12px',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px -5px rgba(0,0,0,0.15)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)', boxShadow: '0 12px 24px -5px rgba(0,0,0,0.2)' } 
              }}
            >
              Download for iOS
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayStoreIcon />}
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main', 
                px: 4, 
                py: 1.8, 
                borderRadius: '12px',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px -5px rgba(0,0,0,0.15)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.9)', boxShadow: '0 12px 24px -5px rgba(0,0,0,0.2)' } 
              }}
            >
              Download for Android
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 6, bgcolor: '#0f172a', color: 'slate.400', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Container>
          <Grid container spacing={4} sx={{ mb: 4, textAlign: { xs: 'center', sm: 'left' } }}>
            <Grid item xs={12} sm={6}>
              <Typography 
                variant="h5" 
                fontWeight="900" 
                color="white" 
                gutterBottom
                sx={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-0.8px' }}
              >
                Serveley
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7, maxW: 360, mx: { xs: 'auto', sm: 0 }, lineHeight: 1.6 }}>
                Your trusted local service marketplace. Connecting you with the best professionals in your neighborhood.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'flex-end' }, justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Button href="#services" sx={{ color: 'grey.400', textTransform: 'none', '&:hover': { color: 'white' } }}>Services</Button>
                <Button href="#how-it-works" sx={{ color: 'grey.400', textTransform: 'none', '&:hover': { color: 'white' } }}>How it Works</Button>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 3 }} />
          <Typography variant="body2" textAlign="center" sx={{ opacity: 0.5 }}>
            © {new Date().getFullYear()} Serveley. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
