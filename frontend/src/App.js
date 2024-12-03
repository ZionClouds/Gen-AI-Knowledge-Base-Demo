import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UploadSection from './components/UploadSection';
import AskQuestionSection from './components/AskQuestionSection';
import BrowseFilesSection from './components/BrowseFilesSection';
import { Container, Box, Button } from '@mui/material';

// Assuming you have these images in the src/assets/icons folder
import uploadIcon from './assets/icons/upload.svg'; // Replace with the actual path to your icon
import questionIcon from './assets/icons/qa-gradient-01.svg'; // Replace with the actual path to your icon
import browseIcon from './assets/icons/browse.svg'; // Replace with the actual path to your icon

function App() {
  const [showAskQuestion, setShowAskQuestion] = useState(false);

  const handleShowAskQuestion = () => {
    setShowAskQuestion(true);
  };

  return (
    <Router>
      <div>
        <Header />
        <Container sx={{ my: 5, maxWidth: 'lg', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          {/* Conditional Ask Question Section */}
          {showAskQuestion && <AskQuestionSection />}

          {/* Buttons Section (Centered Horizontally in a Row) */}
          <Box
            sx={{
              mt: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4, // Space between buttons
            }}
          >
            <Link to="/knowledge-base/upload" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  backgroundColor: 'white',
                  color: '#000',
                  width: '300px',
                  height: '100px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
                endIcon={<img src={uploadIcon} alt="upload" style={{ width: '62px', height: '62px' }} />}
              >
                Upload Documents
              </Button>
            </Link>

            <Button
              variant="contained"
              onClick={handleShowAskQuestion}
              sx={{
                px: 4,
                py: 1.5,
                backgroundColor: 'white',
                color: '#000',
                width: '300px',
                height: '100px',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                },
              }}
              endIcon={<img src={questionIcon} alt="ask" style={{ width: '108px', height: '108px' }} />}
            >
              Ask Questions
            </Button>

            <Link to="/knowledge-base/browse" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  backgroundColor: 'white',
                  color: '#000',
                  width: '300px',
                  height: '100px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: '#f0f0f0',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
                endIcon={<img src={browseIcon} alt="browse" style={{ width: '72px', height: '72px' }} />}
              >
                Browse the Bucket
              </Button>
            </Link>
          </Box>
        </Container>

        {/* Routes for other sections */}
        <Container sx={{ my: 5, maxWidth: 'lg' }}>
          <Routes>
            <Route path="/knowledge-base/upload" element={<UploadSection />} />
            <Route path="/knowledge-base/ask" element={<AskQuestionSection />} />
            <Route path="/knowledge-base/browse" element={<BrowseFilesSection />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;