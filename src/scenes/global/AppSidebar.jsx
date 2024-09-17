import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, colors, IconButton, Typography, useTheme } from "@mui/material";
import Link from "react-router-dom";
import { tokens } from "../../themes";
// ICONS
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const AppSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, isSelected] = useState("Dashboard");
  return (
    <Box style={{ backgroundColor: `${colors.primary[400]} !important` }}>
      <Sidebar
        style={{ backgroundColor: `${colors.primary[400]} !important` }}
        rootStyles={{
          backgroundColor: `${colors.primary[400]} !important`,

          // [`.${sidebarClasses.container}`]: {
          //   background: `${colors.primary[400]} !important`,
          // },
          // [`.${sidebarClasses.iconWrapper}`]: {
          //   background: "transparent !important",
          // },
          // [`.${sidebarClasses.innerItem}`]: {
          //   padding: "5px 35px 5px 20px !important",
          // },
          // [`.${sidebarClasses.innerItemHover}`]: {
          //   color: "#868dfb !important",
          // },
          // [`.${sidebarClasses.innerItemActive}`]: {
          //   color: "#6870fa !important",
          // },
        }}
      ></Sidebar>
    </Box>
  );
};

export default Sidebar;
