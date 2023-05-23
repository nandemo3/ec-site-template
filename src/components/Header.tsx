'use client'

import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import ReplayIcon from '@mui/icons-material/Replay'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box, IconButton, InputBase, Link, Toolbar, Typography } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

import ServiceIcon from '@/components/icon/ServiceIcon'

import NewsBar from './NewsBar'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: 'solid',
  borderColor: alpha('#000', 0.15),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 'auto',
  },
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  'color': 'inherit',
  'width': '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
  },
}))

export default function SearchAppBar() {
  return (
    <Box sx={{ bgcolor: '#FFF' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link href="/"
            aria-label="open drawer"
            sx={{ mr: 1, mt: 1 }}
          >
            <ServiceIcon fill="black"/>
          </Link>
          <Search
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            <StyledInputBase
              placeholder="キーワードを入力"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton
              size="small"
            >
              <SearchIcon />
            </IconButton>
          </Search>
          <Box sx={{ marginLeft: 4 }}>
            <IconButton
              size="small"
              sx={{ flexDirection: 'column' }}
            >
              <ShoppingCartIcon />
              <Typography variant="caption">カート</Typography>
            </IconButton>
            <IconButton
              size="small"
              sx={{ flexDirection: 'column' }}
            >
              <ReplayIcon />
              <Typography variant="caption">注文履歴</Typography>
            </IconButton>
            <IconButton
              size="small"
              sx={{ flexDirection: 'column' }}
            >
              <PersonIcon />
              <Typography variant="caption">アカウント</Typography>
            </IconButton>
            <IconButton
              size="small"
              sx={{ flexDirection: 'column' }}
            >
              <LogoutIcon />
              <Typography variant="caption">ログアウト</Typography>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Link href="/"
            aria-label="open drawer"
            sx={{ mr: 1, mt: 1 }}
          >
            <ServiceIcon fill="black"/>
          </Link>
          <Box sx={{ marginLeft: 'auto', mt: 1 }}>
            <IconButton
              size="small"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="small"
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
      <NewsBar title="【重要】セール開催のお知らせ！" />
    </Box>
  )
}
