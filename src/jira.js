const basePath = 'http://localhost:3001';

const fetchSettings= {
  method: 'GET',
  mode: 'cors',
  cache: 'default'
};

const esc = encodeURIComponent;

export const makeRequest = (method, params = {}, start = 0, limit = 50) => {
  params = {...params, start, limit};

  const query = Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');

  return fetch(`${basePath}/${method}?${query}`, fetchSettings)
    .then(response => response.json());
}

export const getBoards = (params) => makeRequest('rest/agile/1.0/board/240', params);

export const getBoard = (boardId) => makeRequest(`rest/agile/1.0/board/${boardId}`);

export const getSprints = (boardId, params) => makeRequest(`rest/agile/1.0/board/${boardId}/sprint`, params);
