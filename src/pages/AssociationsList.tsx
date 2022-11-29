// @mui
<<<<<<< HEAD:src/pages/PageOne.tsx
import { Container, Typography, Grid } from '@mui/material';
=======
import { Container, Typography } from '@mui/material';
import useLocales from 'src/hooks/useLocales';
>>>>>>> bcb2ae32d4bad3166ff6ab9422b101fcb1d2e678:src/pages/AssociationsList.tsx
// components
import Page from '../components/Page';
import BookingCheckInWidgets from '../components/graphics/BookingCheckInWidgets';
import BookingWidgetSummary from 'src/components/graphics/BookingWidgetSummary';
// ----------------------------------------------------------------------
import { BookingIllustration } from '../assets';

export default function AssociationsList() {
  const { translate } = useLocales();

  return (
<<<<<<< HEAD:src/pages/PageOne.tsx
    <Page title="Page One">
      <Container style={{ display: 'flex', flexWrap: 'wrap', columnGap: '100' }}>
=======
    <Page title={translate('associationsListPage.title')}>
      <Container>
>>>>>>> bcb2ae32d4bad3166ff6ab9422b101fcb1d2e678:src/pages/AssociationsList.tsx
        <Typography variant="h3" component="h1" paragraph>
          Page One
        </Typography>
        <Grid item xs={12} md={4}>
          <BookingWidgetSummary
            title="Associations"
            total={714000}
            icon={<BookingIllustration />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <BookingWidgetSummary title="Units" total={714000} icon={<BookingIllustration />} />
        </Grid>
        <Grid item xs={12} md={12}>
          <BookingCheckInWidgets
            title="Left the Platform"
            chartData={[
              { label: 'Associations', percent: 72, total: 38566 },
              { label: 'Units', percent: 50, total: 18472 },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <BookingCheckInWidgets
            chartData={[
              { label: 'Associations', percent: 72, total: 38566 },
              { label: 'Units', percent: 64, total: 18472 },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <BookingCheckInWidgets
            chartData={[
              { label: 'Associations', percent: 72, total: 38566 },
              { label: 'Units', percent: 64, total: 18472 },
            ]}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <BookingCheckInWidgets
            title="Left the Platform"
            chartData={[
              { label: 'Associations', percent: 72, total: 38566 },
              { label: 'Units', percent: 64, total: 18472 },
            ]}
          />
        </Grid>
      </Container>
    </Page>
  );
}
