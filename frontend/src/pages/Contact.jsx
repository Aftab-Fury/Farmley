import { Container, Typography, Box, Grid, Paper, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: '#f9f9f9',
}))

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}))

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <StyledPaper elevation={3}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph align="center">
          Get in touch with us
        </Typography>
      </StyledPaper>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StyledPaper>
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            <ContactInfo>
              <LocationOnIcon sx={{ mr: 2, color: '#4CAF50' }} />
              <Box>
                <Typography variant="h6">Address</Typography>
                <Typography>
                  123 Farm Street, Agricultural Zone
                  <br />
                  City, State 12345
                </Typography>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <PhoneIcon sx={{ mr: 2, color: '#4CAF50' }} />
              <Box>
                <Typography variant="h6">Phone</Typography>
                <Typography>+1 (123) 456-7890</Typography>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <EmailIcon sx={{ mr: 2, color: '#4CAF50' }} />
              <Box>
                <Typography variant="h6">Email</Typography>
                <Typography>info@farmlyf.com</Typography>
              </Box>
            </ContactInfo>
            <ContactInfo>
              <AccessTimeIcon sx={{ mr: 2, color: '#4CAF50' }} />
              <Box>
                <Typography variant="h6">Working Hours</Typography>
                <Typography>
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </Typography>
              </Box>
            </ContactInfo>
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledPaper>
            <Typography variant="h4" gutterBottom>
              Send us a Message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      mb: 2,
                      backgroundColor: '#4CAF50',
                      '&:hover': {
                        backgroundColor: '#45a049',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>

      <StyledPaper>
        <Typography variant="h4" gutterBottom align="center">
          Visit Our Office
        </Typography>
        <Box
          sx={{
            height: 400,
            width: '100%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>Map will be displayed here</Typography>
        </Box>
      </StyledPaper>
    </Container>
  )
}

export default Contact 