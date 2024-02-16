import { Box, Grid, Link, Typography, styled } from '@mui/material'

import ServiceIcon from './icon/ServiceIcon'

const StyledTypography = styled(Typography)({
  color: '#FFF',
  marginTop: '1vh',
})
const Title = styled(StyledTypography)({
  fontWeight: 'bold',
  marginBottom: '1vh',
})

const CopyRight = styled(Typography)({
  color: '#FFF',
  textAlign: 'center',
  paddingBottom: '1vh',
})

const StyledLink = styled(Link)({
  color: '#FFF',
})

function Footer() {
  return (
  <footer>
    <Box sx={{ bgcolor: '#222' }}>
      <Box sx={{ height: '50vh', px: 20 }}>
        <Grid container sx={{ pt: 7 }}>
          <Grid container item xs={3} direction="column">
            <Title variant="subtitle1">サービス</Title>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">利用規約</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">プライバシーポリシー</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">配送について</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">返品・交換について</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">特定商取引法に基づく表示</StyledTypography>
            </StyledLink>
          </Grid>
          <Grid item xs={3}>
            <Title variant='subtitle1'>カテゴリー</Title>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">家電</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">ファッション</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">食品</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">書籍</StyledTypography>
            </StyledLink>
          </Grid>
          <Grid item xs={3}>
            <Title variant='subtitle1'>サポート</Title>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">お問い合わせ</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">ヘルプ</StyledTypography>
            </StyledLink>
            <StyledLink href="#" underline="hover">
              <StyledTypography variant="body2">よくある質問</StyledTypography>
            </StyledLink>
          </Grid>
        </Grid>
      </Box>
      <StyledLink href="/">
        <Grid container item
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
          sx={{ ml: 1 }}
        >
          <Grid item>
            <ServiceIcon fill="white" />
          </Grid>
        </Grid>
      </StyledLink>
      <CopyRight variant="body2" >
        &copy; {new Date().getFullYear()} MYEC.Inc All rights reserved.
      </CopyRight>
    </Box>
  </footer>
  )
}

export default Footer
