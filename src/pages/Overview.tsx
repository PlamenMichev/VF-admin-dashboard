// @mui
import { Container, Grid } from '@mui/material';
import useLocales from 'src/hooks/useLocales';
// components
import Page from '../components/Page';
import BookingCheckInWidgets from '../components/graphics/SubscriptionInfo';
import BookingWidgetSummary from 'src/components/graphics/UserSummary';
// ----------------------------------------------------------------------
import { BookingIllustration } from '../assets';

export default function Overview() {
  const { translate } = useLocales();

  return (
    <Page title={translate('overviewPage.title')}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <BookingWidgetSummary
              title={translate('overviewPage.associations')}
              total={714000}
              icon={<BookingIllustration />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BookingWidgetSummary
              title={translate('overviewPage.units')}
              total={714000}
              icon={<BookingIllustration />}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCheckInWidgets
              title={translate('overviewPage.free')}
              chartData={[
                { label: translate('overviewPage.associations'), percent: 72, total: 38566 },
                { label: translate('overviewPage.units'), percent: 50, total: 18472 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCheckInWidgets
              title={translate('overviewPage.basic')}
              chartData={[
                { label: translate('overviewPage.associations'), percent: 72, total: 38566 },
                { label: translate('overviewPage.units'), percent: 64, total: 18472 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCheckInWidgets
              title={translate('overviewPage.premium')}
              chartData={[
                { label: translate('overviewPage.associations'), percent: 72, total: 38566 },
                { label: translate('overviewPage.units'), percent: 64, total: 18472 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <BookingCheckInWidgets
              title={translate('overviewPage.left')}
              chartData={[
                { label: translate('overviewPage.associations'), percent: 72, total: 38566 },
                { label: translate('overviewPage.units'), percent: 64, total: 18472 },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
