// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// import Footer from "../Component/Footer";
// import Top from "../Component/Top";

// const AppointmentTable = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const fetchAppointments = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/appointments");
//       const data = await response.json();
//       setAppointments(data);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:5000/api/appointments/${id}`, {
//         method: "DELETE",
//       });
//       // Refresh the list after deletion
//       fetchAppointments();
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };

//   return (
//     <>
//       <Top />
//       <Container sx={{ my: 5 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           📋 All Appointments
//         </Typography>

//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>Vehicle</TableCell>
//                 <TableCell>Year</TableCell>
//                 <TableCell>Services</TableCell>
//                 <TableCell>Date</TableCell>
//                 <TableCell>Time Frame</TableCell>
//                 <TableCell>Actions</TableCell> {/* New header cell */}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {appointments.map((row, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.email}</TableCell>
//                   <TableCell>{row.phone}</TableCell>
//                   <TableCell>{row.vehicleMake}</TableCell>
//                   <TableCell>{row.vehicleYear}</TableCell>
//                   <TableCell>{row.selectedServices?.join(", ")}</TableCell>
//                   <TableCell>{row.appointmentDate}</TableCell>
//                   <TableCell>{row.timeFrame}</TableCell>
//                   <TableCell>
//                     {/* Update button can be connected to a modal or route */}
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       size="small"
//                       sx={{ mr: 1 }}
//                       onClick={() => alert("Update functionality coming soon")}
//                     >
//                       Update
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       color="error"
//                       size="small"
//                       onClick={() => handleDelete(row._id)}
//                     >
//                       Delete
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default AppointmentTable;

import React, { useEffect, useState } from "react";
import {
  Container, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, MenuItem, Select
} from "@mui/material";
import Footer from "../Component/Footer";
import Top from "../Component/Top";

const allServices = [
  "Air Conditioning", "Brakes Repair", "Engine Diagnostics", "Heating & Cooling",
  "Oil, Lube & Filters", "Steering & Suspension", "Transmission Repair", "Wheel Alignment"
];

const vehicleMakeOptions = [
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
  { label: "Saleen", value: "Saleen" }
];

const timeOptions = ["Morning", "Afternoon", "Evening"];

const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/appointments/");
      const data = await response.json();
      const userEmail = localStorage.getItem("userEmail");
      const userAppointments = data.filter(item => item.email === userEmail);
      setAppointments(userAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/appointments/${id}`, { method: "DELETE" });
      fetchAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  const startEdit = (appointment) => {
    setEditingId(appointment._id);
    setEditedData({
      name: appointment.name || "",
      vehicleMake: appointment.vehicleMake || "",
      vehicleYear: appointment.vehicleYear || "",
      selectedServices: appointment.selectedServices || [],
      appointmentDate: appointment.appointmentDate?.slice(0, 10) || "",
      timeFrame: appointment.timeFrame || "",
    });
  };

  const saveUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });



      const contentType = response.headers.get("content-type");
      const isJson = contentType && contentType.includes("application/json");

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response text:", errorText);
        alert("Failed to update appointment.");
        return;
      }

      if (isJson) {
         await response.json();
        alert("✅Appointment updated!");
        setEditingId(null);
        fetchAppointments();
      } else {
        const text = await response.text();
        console.error("Unexpected non-JSON response:", text);
        alert("Unexpected response from server");
      }

    } catch (error) {
      console.error("Network or parsing error:", error);
      alert("Network or server error");
    }
  };

  const handleInputChange = (field, value) => {
    setEditedData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Top />
      <Container sx={{ my: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          📋 Your Appointments
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Vehicle</strong></TableCell>
                <TableCell><strong>Year</strong></TableCell>
                <TableCell><strong>Services</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Time Frame</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    {editingId === row._id ? (
                      <TextField
                        value={editedData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        size="small"
                      />
                    ) : row.name}
                  </TableCell>
                  <TableCell>
                    {editingId === row._id ? (
                      <Select
                        value={editedData.vehicleMake}
                        onChange={(e) => handleInputChange("vehicleMake", e.target.value)}
                        size="small"
                        style={{ width: 150 }}
                      >
                        {vehicleMakeOptions.map((opt) => (
                          <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : row.vehicleMake}
                  </TableCell>
                  <TableCell>
                    {editingId === row._id ? (
                      <TextField
                        value={editedData.vehicleYear}
                        onChange={(e) => handleInputChange("vehicleYear", e.target.value)}
                        size="small"
                      />
                    ) : row.vehicleYear}
                  </TableCell>
                  <TableCell>
                    {editingId === row._id ? (
                      <Select
                        multiple
                        value={editedData.selectedServices}
                        onChange={(e) => handleInputChange("selectedServices", e.target.value)}
                        size="small"
                        style={{ width: 200 }}
                      >
                        {allServices.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : row.selectedServices?.join(", ")}
                  </TableCell>
                  <TableCell>
                    {editingId === row._id ? (
                      <input
                        type="date"
                        value={editedData.appointmentDate}
                        onChange={(e) => handleInputChange("appointmentDate", e.target.value)}
                      />
                    ) : row.appointmentDate?.slice(0, 10)}
                  </TableCell>
                  <TableCell>
                    {editingId === row._id ? (
                      <Select
                        value={editedData.timeFrame}
                        onChange={(e) => handleInputChange("timeFrame", e.target.value)}
                        size="small"
                      >
                        {timeOptions.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    ) : row.timeFrame}
                  </TableCell>
                  <TableCell>
                    {editingId === row._id ? (
                      <Button
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => saveUpdate(row._id)}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => startEdit(row)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(row._id)}
                      sx={{ ml: 1 }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </>
  );
};

export default AppointmentTable;
