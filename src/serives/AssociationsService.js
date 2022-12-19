import axiosInstance from '../utils/axios';
import { getPaginationFromHeaders } from '../utils/headersReader';

const AssociationsService = {
  getAssociations: async (page, perPage, orderBy, orderByDirection, searchQuery) => {
    const response = await axiosInstance.get(
      `associations?page=${page}&perPage=${perPage}&orderBy=${orderBy}&searchQuery=${searchQuery}&orderDirection=${orderByDirection}`
    );

    const result = {
      data: response.data,
      pagination: getPaginationFromHeaders(response.headers),
    };

    return result;
  },
};

export default AssociationsService;
