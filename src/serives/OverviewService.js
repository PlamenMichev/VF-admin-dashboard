import axiosInstance from '../utils/axios';

const OverviewService = {
  getAssociationsAndUnitsCount: async () => axiosInstance.get(`associations/total-count`),
  getSubscriptionsCount: async () => axiosInstance.get('associations/subscriptions-count'),
};

export default OverviewService;
