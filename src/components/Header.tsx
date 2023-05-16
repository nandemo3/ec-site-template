'use client';

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Icon from "@/components/icon/ServiceIcon";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReplayIcon from '@mui/icons-material/Replay';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import { Typography } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "solid",
  borderColor: alpha("#000", 0.15),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <Icon />
        </IconButton>
        <Search
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{marginLeft: 4}}>
          <IconButton
            size="small"
            sx={{flexDirection: 'column'}}
          >
            <ShoppingCartIcon />
            <Typography variant="caption">カート</Typography>
          </IconButton>
          <IconButton
            size="small"
            sx={{flexDirection: 'column'}}
          >
            <ReplayIcon />
            <Typography variant="caption">注文履歴</Typography>
          </IconButton>
          <IconButton
            size="small"
            sx={{flexDirection: 'column'}}
          >
            <PersonIcon />
            <Typography variant="caption">アカウント</Typography>
          </IconButton>
          <IconButton
            size="small"
            sx={{flexDirection: 'column'}}
          >
            <LogoutIcon />
            <Typography variant="caption">ログアウト</Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </Box>
  );
}