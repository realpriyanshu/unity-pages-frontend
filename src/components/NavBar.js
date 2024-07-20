import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'; // Import jsPDF is a library which is used to convert html txt image etc to pdf
import html2canvas from 'html2canvas'; // Import  html2canvas is a JavaScript library that allows you to take "screenshots" of webpages or parts of webpages directly in the browser. It does this by rendering the DOM of the specified HTML element to a canvas element, which can then be used to generate an image.

// Custom styles for the NavBar
const CustomAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#1E2A38', // Dark background color
    boxShadow: 'none', // Remove box shadow
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontFamily: 'Roboto, sans-serif', // Custom font
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#FFFFFF', // White font color
    textAlign: 'center',
}));

const ExportButton = styled(Button)(({ theme }) => ({
    fontSize: '0.75rem', // Smaller font size
    padding: '4px 8px', // Smaller padding
    marginRight: theme.spacing(2), // Add margin to the right
    backgroundColor: '#3f51b5', // Custom background color
    color: '#fff', // White text color
    '&:hover': {
        backgroundColor: '#303f9f', // Darker background on hover
    },
}));

const NavBar = () => {
    const exportPDF = async () => {
        const input = document.getElementById('container'); // Selects the Quill editor container element by its ID
        const canvas = await html2canvas(input); // Converts the selected HTML element into a canvas element
        const imgData = canvas.toDataURL('image/png'); // Converts the canvas content to a base64-encoded PNG image
        const pdf = new jsPDF(); // Creates a new jsPDF instance (default is portrait, A4 size)
        const imgProps = pdf.getImageProperties(imgData); // Gets the properties of the image (width and height)
        const pdfWidth = pdf.internal.pageSize.getWidth(); // Gets the width of the PDF page
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width; // Calculates the height of the image while maintaining aspect ratio to fit the PDF width
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Adds the image to the PDF at coordinates (0,0) with the calculated width and height
        pdf.save('document.pdf'); // Saves the PDF with the filename 'document.pdf'
    };
    
    return (
        <CustomAppBar position="static">
            <Toolbar>
            { <Box sx={{ flexGrow: 0.3 }} /> /*this box is used to center the unity page title */}
                <TitleTypography variant="h6">
                    UnityPages
                </TitleTypography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ExportButton onClick={exportPDF} variant="contained">Export as PDF</ExportButton>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/about"
                        sx={{
                            fontFamily: 'Roboto, sans-serif',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            marginRight: 2,
                            '&:hover': {
                                backgroundColor: '#2E3B4E', // Darker background on hover
                            },
                        }}
                    >
                        About
                    </Button>
                </Box>
            </Toolbar>
        </CustomAppBar>
    );
};

export default NavBar;





//before export btn "-"

// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link } from 'react-router-dom';

// // Custom styles for the NavBar
// const CustomAppBar = styled(AppBar)(({ theme }) => ({
//     backgroundColor: '#1E2A38', // Dark background color
//     boxShadow: 'none', // Remove box shadow
// }));

// const TitleTypography = styled(Typography)(({ theme }) => ({
//     flexGrow: 1,
//     fontFamily: 'Roboto, sans-serif', // Custom font
//     fontWeight: 'bold',
//     fontSize: '1.5rem',
//     color: '#FFFFFF', // White font color
//     textAlign: 'center',
// }));

// const NavBar = () => {
//     return (
//         <CustomAppBar position="static">
//             <Toolbar>
//                 <TitleTypography variant="h6">
//                 <Button
//                         color="inherit"
                        
                     
//                         sx={{
//                             fontFamily: 'Roboto, sans-serif',
//                             fontWeight: 'bold',
//                             fontSize: '1rem',
//                             marginRight: 2,
//                             '&:hover': {
//                                 backgroundColor: '#2E3B4E', // Darker background on hover
//                             },
//                         }}
//                     >
//                        UnityPages
//                     </Button>
                  
//                 </TitleTypography>
//                 <Box sx={{ marginLeft: 2 }}>
                    
//                     <Button
//                         color="inherit"
//                         component={Link}
//                         to="/about"
//                         sx={{
//                             fontFamily: 'Roboto, sans-serif',
//                             fontWeight: 'bold',
//                             fontSize: '1rem',
//                             marginRight: 2,
//                             '&:hover': {
//                                 backgroundColor: '#2E3B4E', // Darker background on hover
//                             },
//                         }}
//                     >
//                         About
//                     </Button>
//                 </Box>
//             </Toolbar>
//         </CustomAppBar>
//     );
// };

// export default NavBar;