

import React, { useEffect, useState } from "react";
import {
  Container, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, MenuItem, Select,Box
} from "@mui/material";
import Footer from "../Component/Footer";
import Top from "../Component/Top";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



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
      const response = await fetch("https://full-stack-1-jmh6.onrender.com/api/appointments/");
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
      await fetch(`https://full-stack-1-jmh6.onrender.com/api/appointments/${id}`, { method: "DELETE" });
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
      const response = await fetch(`https://full-stack-1-jmh6.onrender.com/api/appointments/${id}`, {
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

       {/* Back Button */}
      <Box sx={{ textAlign: "center", mt: 4, mb: 6 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#d90429",
              color: "white",
              px: 3,
              py: 1.2,
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "background 0.3s, transform 0.2s",
              "&:hover": {
                backgroundColor: "#b40321",
                transform: "translateY(-2px)",
              },
            }}
          >
            <ArrowBackIcon sx={{ mr: 1 }} />
            Back to Home 🏡
          </Box>
        </Link>
      </Box>
      <Footer />
    </>
  );
};

export default AppointmentTable;
