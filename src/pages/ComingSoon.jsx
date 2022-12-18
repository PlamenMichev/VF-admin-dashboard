import { Typography } from '@mui/material';
import { Container, styled } from '@mui/system';
import { ComingSoonIllustration } from '../assets';
import Page from '../components/Page';
import useLocales from '../hooks/useLocales';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  maxHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function ComingSoon() {
  const { translate } = useLocales();

  return (
    <Page title={translate('comingSoon.title')}>
      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            {translate('comingSoon.title')}!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {translate('comingSoon.description')}!
          </Typography>

          <ComingSoonIllustration sx={{ my: 10, height: 240 }} />
        </ContentStyle>
      </Container>
    </Page>
  );
}
