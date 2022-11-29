// @mui
import { Container, Typography, Grid } from '@mui/material';
import useLocales from 'src/hooks/useLocales';
// components
import Page from '../components/Page';
import BookingCheckInWidgets from '../components/graphics/BookingCheckInWidgets';
import BookingWidgetSummary from 'src/components/graphics/BookingWidgetSummary';
// ----------------------------------------------------------------------
import { BookingIllustration } from '../assets';

export default function Overview() {
  const { translate } = useLocales();

  return (
    <Page title={translate('associationsListPage.title')}>
      <Container>
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
