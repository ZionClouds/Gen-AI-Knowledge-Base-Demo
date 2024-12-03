import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Card, CardContent, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
// Assuming you have these images in the src/assets/icons folder
import askIcon from '../assets/icons/qa-white-01.svg'; // Replace with your own SVG icon

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, rgba(32, 91, 243, 0.8) 30%, rgba(137, 205, 169, 0.8) 90%)',
  borderRadius: 12,
  color: 'white',
  padding: '10px 20px',
  textTransform: 'none',
  fontWeight: 'bold',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add shadow to button
  '&:hover': {
    background: 'linear-gradient(45deg, #205BF3 30%, #89CDA9 90%)', // Keep the gradient direction same
    filter: 'brightness(1.1)', // Subtle tint to make the button appear lighter on hover
  },
});

const AskQuestionSection = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleAskQuestion = async () => {
    if (!question) {
      alert('Please enter a question first');
      return;
    }

    setLoading(true); // Start loading
    setAnswer(''); // Clear previous answer

    try {
      const response = await axios.post('/ask', { question }, {
        headers: { 'Content-Type': 'application/json' }
      });

      setAnswer(response.data.answer || response.data.error);
    } catch (error) {
      alert('Error asking question.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Ask a Question
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: '950px',
          gap: 2,
          my: 2,
        }}
      >
        <TextField
          fullWidth
          label="Enter your Question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{ width: { xs: '100%', md: '50%' } }}
          disabled={loading} // Disable input while loading
        />

        {/* Gradient Submit Button */}
        <GradientButton
          variant="contained"
          onClick={handleAskQuestion}
          disabled={loading} // Disable button while loading
          endIcon={
            loading ? (
              <CircularProgress size={24} color="inherit" /> // Loading spinner
            ) : (
              <img
                src={askIcon}
                alt="ask"
                style={{
                  width: '36px',
                  height: '36px',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))'
                }}
              />
            )
          }
        >
          {loading ? 'Submitting...' : 'Submit Question'}
        </GradientButton>
      </Box>

      {answer && (
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <Card
            sx={{
              width: { xs: '95%', md: '95%' },
              mx: 'auto',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
              borderRadius: '16px'
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'start' }}>
                Answer:
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'start' }}>
                {answer}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default AskQuestionSection;
