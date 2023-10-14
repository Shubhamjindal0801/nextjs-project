'use client'

import { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { MenuRoundedIcon} from '../../../public/menu.jpg';
import { IconButton } from '@mui/material';
import { Switch } from "@mui/material";
import Link from 'next/link';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);
  const changeMode = () => {
    setDarkMode(!darkMode);
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  return (
    <div>

      <IconButton onClick={() => setOpen(true)} ><MenuRoundedIcon className='link' /></IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}>
        <div className='drawer-div'>
          <Link href="/"><p className="link">Home</p></Link>
          <Link href="/compare"><p className="link">Compare</p></Link>
          <Link href="/wathclist"><p className="link">WatchList</p></Link>
          <Link href="/dashboard"><p className="link">Dashboard</p></Link>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p className="link">{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}