// @mui
import { Container, Grid } from '@mui/material';
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import SubscriptionInfo from '../components/graphics/SubscriptionInfo';
import CountSummory from '../components/graphics/CountSummory';
// ----------------------------------------------------------------------
import { BookingIllustration } from '../assets';
import { useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import OverviewService from '../serives/OverviewService';

export default function Overview() {
  const { translate } = useLocales();

  const [loading, setLoading] = useState(true);
  const [associationsUnitsCount, setAssociationsUnitsCount] = useState({
    associationsCount: 0,
    unitsCount: 0,
  });
  const [subscriptionsData, setSubscriptionsData] = useState([
    {
      subscriptionType: 0,
      associationsPercantage: 0,
      associationsCount: 0,
      unitsPercantage: 0,
      unitsCount: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const associationsUnitsCountResult = await OverviewService.getAssociationsAndUnitsCount();
      const subscriptionsDataResult = await OverviewService.getSubscriptionsCount();

      setAssociationsUnitsCount(associationsUnitsCountResult.data);
      setSubscriptionsData(subscriptionsDataResult.data);

      setLoading(false);
    };

    fetchData();
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <Page title={translate('overviewPage.title')}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <CountSummory
              title={translate('overviewPage.associations')}
              total={associationsUnitsCount.associationsCount}
              icon={<BookingIllustration />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CountSummory
              title={translate('overviewPage.units')}
              total={associationsUnitsCount.unitsCount}
              icon={<BookingIllustration />}
            />
          </Grid>
          {subscriptionsData.map((subscription) => (
            <Grid item xs={12} md={6} key={subscription.subscriptionType}>
              <SubscriptionInfo
                title={translate('overviewPage.subsriptionTypes.' + subscription.subscriptionType)}
                chartData={[
                  {
                    label: translate('overviewPage.associations'),
                    percent: subscription.associationsPercantage.toFixed(2),
                    total: subscription.associationsCount,
                  },
                  {
                    label: translate('overviewPage.units'),
                    percent: subscription.unitsPercantage.toFixed(2),
                    total: subscription.unitsCount,
                  },
                ]}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
