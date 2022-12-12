export function getPaginationFromHeaders(headers) {
  const result = {
    pageNumber: +headers['x-pagination-pagenumber'] - 1,
    perPage: +headers['x-pagination-perpage'],
    totalCount: +headers['x-pagination-totalcount'],
    totalPages: +headers['x-pagination-totalpages'],
  };

  return result;
}
