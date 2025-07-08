// import React, { useState } from "react";
// import {
//   Box, Button, Container, Select, InputLabel, Typography, FormControl,
//   TextField, Slider, Checkbox, FormControlLabel, MenuItem, Grid,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import Footer from "../Component/Footer";
// import Header from "../Component/Header";
// import image9 from "../image/img9.jpg";
// import Top from "../Component/Top"
// import { useNavigate } from "react-router-dom";



// const serviceOptions = [
//   "Air Conditioning", "Brakes Repair", "Engine Diagnostics",
//   "Heating & Cooling", "Oil, Lube & Filters", "Steering & Suspension",
//   "Transmission Repair", "Wheel Alignment",
// ];

// const timeFrames = ["Morning", "Afternoon", "Evening"];

// const vehicleMakes = [
//   { label: "General Motors", value: "General Motors" },
//   { label: "Land Rover", value: "Land Rover" },
//   { label: "Lexus", value: "Lexus" },
//   { label: "Lincoln", value: "Lincoln" },
//   { label: "Mazda", value: "Mazda" },
//   { label: "Mercedes - Benz", value: "Mercedes - Benz" },
//   { label: "Mercury", value: "Mercury" },
//   { label: "Mitsubishi", value: "Mitsubishi" },
//   { label: "Nissan", value: "Nissan" },
//   { label: "Renault", value: "Renault" },
//   { label: "Plymouth", value: "Plymouth" },
//   { label: "Pontiac Porsche", value: "Pontiac Porsche" },
//   { label: "Rover", value: "Rover" },
//   { label: "Saab", value: "Saab" },
//   { label: "Saleen", value: "Saleen" },
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const Appointment = () => {
//   const [value, setValue] = useState("");
//   const [vehicleYear, setVehicleYear] = useState(2009);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [mileage, setMileage] = useState("");
//   const [date, setDate] = useState("");
//   const [timeFrame, setTimeFrame] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [comments, setComments] = useState("");

//   const handleServiceChange = (service) => {
//     setSelectedServices((prev) =>
//       prev.includes(service)
//         ? prev.filter((s) => s !== service)
//         : [...prev, service]
//     );
//   };

//   const handleSubmit = async () => {
//     if (!value || !vehicleYear || !mileage || !date || !timeFrame || selectedServices.length === 0 || !name || !email || !phone) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(phone)) {
//       alert("Phone number must be exactly 10 digits.");
//       return;
//     }

//     const appointmentData = {
//       vehicleYear,
//       vehicleMake: value,
//       vehicleMileage: mileage,
//       appointmentDate: date,
//       timeFrame,
//       selectedServices,
//       name,
//       email,
//       phone,
//       comments,
//     };


//     setValue("");
//     setVehicleYear(2009);
//     setSelectedServices([]);
//     setMileage("");
//     setDate("");
//     setTimeFrame("");
//     setName("");
//     setEmail("");
//     setPhone("");
//     setComments("");

//     try {
//       const response = await fetch("http://localhost:5000/api/appointments", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(appointmentData),
//       });

//       if (response.ok) {
//         alert("Appointment submitted successfully!");
//       } else {
//         alert("Failed to submit appointment.");
//       }
//     } catch (error) {
//       alert("Error submitting appointment: " + error.message);
//     }
//   };

//   const navigate = useNavigate();

//   return (


    // <Box>
    //   {/* Header Section */}
    //   <Box
    //     sx={{
    //       backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.1) 100%),url(${image9})`,
    //       backgroundSize: "cover",
    //       height: { xs: "25vh", md: "30vh" },
    //       width: "100%",
    //       minHeight: { xs: "180px", sm: "220px", md: "280px" },
    //     }}
    //   >
    //     <Header />
    //     <Top />
    //     <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
    //       <Typography
    //         variant="h4"
    //         sx={{
    //           color: "white",
    //           textAlign: "center",
    //           py: { xs: 5, sm: 7 },
    //           fontWeight: "bold",
    //         }}
    //       >
    //         Appointment
    //       </Typography>
    //     </motion.div>
    //   </Box>

    //   {/* Form Section */}
    //   <Box sx={{ py: 6 }}>
    //     <Container>
    //       <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
    //         <Typography variant="h4" align="center" fontWeight="bold" mb={2}>
    //           📝 BOOK AN APPOINTMENT
    //         </Typography>
    //       </motion.div>

    //       <Grid container spacing={3}>
    //         <Grid item xs={12} md={4}>
    //           <Typography>Vehicle Year</Typography>
    //           <Slider
    //             value={vehicleYear}
    //             onChange={(e, newVal) => setVehicleYear(newVal)}
    //             min={1990}
    //             max={2025}
    //             valueLabelDisplay="on"
    //           />
    //         </Grid>

    //         <Grid item xs={12} md={4}>
    //           <FormControl fullWidth required>
    //             <InputLabel> Vehicle Make</InputLabel>
    //             <Select value={value} onChange={(e) => setValue(e.target.value)} label="Vehicle Make">
    //               {vehicleMakes.map((make) => (
    //                 <MenuItem key={make.value} value={make.value}>
    //                   {make.label}
    //                 </MenuItem>
    //               ))}
    //             </Select>
    //           </FormControl>
    //         </Grid>

    //         <Grid item xs={12} md={4}>
    //           <TextField required fullWidth label="Vehicle Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} />
    //         </Grid>

    //         <Grid item xs={12} md={6}>
    //           <TextField
    //             required
    //             fullWidth
    //             label="Appointment Date"
    //             type="date"
    //             InputLabelProps={{ shrink: true }}
    //             value={date}
    //             onChange={(e) => setDate(e.target.value)}
    //           />
    //         </Grid>

    //         <Grid item xs={12} md={6}>
    //           <TextField
    //             required
    //             fullWidth
    //             label="Preferred Time Frame"
    //             select
    //             value={timeFrame}
    //             onChange={(e) => setTimeFrame(e.target.value)}
    //           >
    //             {timeFrames.map((frame) => (
    //               <MenuItem key={frame} value={frame}>{frame}</MenuItem>
    //             ))}
    //           </TextField>
    //         </Grid>

    //         <Grid item xs={12}>
    //           <Typography>Select Services </Typography>
    //           <Box display="flex" flexWrap="wrap">
    //             {serviceOptions.map((service) => (
    //               <FormControlLabel
    //                 key={service}
    //                 control={
    //                   <Checkbox
    //                     checked={selectedServices.includes(service)}
    //                     onChange={() => handleServiceChange(service)}
    //                   />
    //                 }
    //                 label={service}
    //               />
    //             ))}
    //           </Box>
    //         </Grid>

    //         <Grid item xs={12} sm={6} md={4}>
    //           <TextField required fullWidth label="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <TextField required fullWidth label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //         </Grid>
    //         <Grid item xs={12} sm={6} md={4}>
    //           <TextField required fullWidth label="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField fullWidth label="Comments" multiline minRows={4} value={comments} onChange={(e) => setComments(e.target.value)} />
    //         </Grid>

//             <Grid item xs={12}>
//               <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
//                 SUBMIT NOW
//               </Button>
//             </Grid>


//             <Grid item xs={8}>
//               <Button variant="contained" color="primary" fullWidth onClick={() => navigate("/appointments")}>
//                 View An Appointment
//               </Button>
//             </Grid>

//           </Grid>
//         </Container>
//       </Box>

//       <Footer />
//     </Box>
//   );
// };

// export default Appointment;



import React, { useState } from "react";
import {
  Box, Button, Container, Select, InputLabel, Typography, FormControl,
  TextField, Slider, Checkbox, FormControlLabel, MenuItem, Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import image9 from "../image/img9.jpg";
import Top from "../Component/Top";
import { useNavigate } from "react-router-dom";

const serviceOptions = [
  "Air Conditioning", "Brakes Repair", "Engine Diagnostics",
  "Heating & Cooling", "Oil, Lube & Filters", "Steering & Suspension",
  "Transmission Repair", "Wheel Alignment",
];

const timeFrames = ["Morning", "Afternoon", "Evening"];

const vehicleMakes = [
  { label: "General Motors", value: "General Motors" },
  { label: "Land Rover", value: "Land Rover" },
  { label: "Lexus", value: "Lexus" },
  { label: "Lincoln", value: "Lincoln" },
  { label: "Mazda", value: "Mazda" },
  { label: "Mercedes - Benz", value: "Mercedes - Benz" },
  { label: "Mercury", value: "Mercury" },
  { label: "Mitsubishi", value: "Mitsubishi" },
  { label: "Nissan", value: "Nissan" },
  { label: "Renault", value: "Renault" },
  { label: "Plymouth", value: "Plymouth" },
  { label: "Pontiac Porsche", value: "Pontiac Porsche" },
  { label: "Rover", value: "Rover" },
  { label: "Saab", value: "Saab" },
  { label: "Saleen", value: "Saleen" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Appointment = () => {
  const [value, setValue] = useState("");
  const [vehicleYear, setVehicleYear] = useState(2009);
  const [selectedServices, setSelectedServices] = useState([]);
  const [mileage, setMileage] = useState("");
  const [date, setDate] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [showViewButton, setShowViewButton] = useState(false);

  const navigate = useNavigate();

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async () => {
    if (!value || !vehicleYear || !mileage || !date || !timeFrame || selectedServices.length === 0 || !name || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    const appointmentData = {
      vehicleYear,
      vehicleMake: value,
      vehicleMileage: mileage,
      appointmentDate: date,
      timeFrame,
      selectedServices,
      name,
      email,
      phone,
      comments,
    };

    try {
      const response = await fetch("https://full-stack-1-jmh6.onrender.com/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        alert("📝Appointment submitted successfully!");
        localStorage.setItem("userEmail", email);
        setShowViewButton(true);

        // Clear fields
        setValue("");
        setVehicleYear(2009);
        setSelectedServices([]);
        setMileage("");
        setDate("");
        setTimeFrame("");
        setName("");
        setEmail("");
        setPhone("");
        setComments("");
      } else {
        alert("Failed to submit appointment.");
      }
    } catch (error) {
      alert("Error submitting appointment: " + error.message);
    }
  };

  return (
    <Box>
     
    
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.1) 100%),url(${image9})`,
          backgroundSize: "cover",
          height: { xs: "25vh", md: "30vh" },
          width: "100%",
          minHeight: { xs: "180px", sm: "220px", md: "280px" },
        }}
      >
        <Header />
        <Top />
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              textAlign: "center",
              py: { xs: 5, sm: 7 },
              fontWeight: "bold",
            }}
          >
            Appointment
          </Typography>
        </motion.div>
      </Box>

      {/* Form Section */}
      <Box sx={{ py: 6 }}>
        <Container>
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
            <Typography variant="h4" align="center" fontWeight="bold" mb={2}>
              📝 BOOK AN APPOINTMENT
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography>Vehicle Year</Typography>
              <Slider
                value={vehicleYear}
                onChange={(e, newVal) => setVehicleYear(newVal)}
                min={1990}
                max={2025}
                valueLabelDisplay="on"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth required>
                <InputLabel> Vehicle Make</InputLabel>
                <Select value={value} onChange={(e) => setValue(e.target.value)} label="Vehicle Make">
                  {vehicleMakes.map((make) => (
                    <MenuItem key={make.value} value={make.value}>
                      {make.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField required fullWidth label="Vehicle Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Appointment Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Preferred Time Frame"
                select
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
              >
                {timeFrames.map((frame) => (
                  <MenuItem key={frame} value={frame}>{frame}</MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography>Select Services </Typography>
              <Box display="flex" flexWrap="wrap">
                {serviceOptions.map((service) => (
                  <FormControlLabel
                    key={service}
                    control={
                      <Checkbox
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                      />
                    }
                    label={service}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField required fullWidth label="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required fullWidth label="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField required fullWidth label="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Comments" multiline minRows={4} value={comments} onChange={(e) => setComments(e.target.value)} />
            </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          SUBMIT NOW
        </Button>
      </Grid>

      {showViewButton && (
        <Grid item xs={12}>
          <Button variant="contained" color="error" fullWidth onClick={() => navigate("/appointments")}>View An Appointment</Button>
        </Grid>
      )}

    
           </Grid>
         </Container>
       </Box>

       <Footer />
     </Box>
  );
};

export default Appointment;

