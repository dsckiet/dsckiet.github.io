import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getIndex = () =>
  axios.get(`${apiUrl}/index`).then(res => res.data);

export const getTeam = () => axios.get(`${apiUrl}/team`).then(res => res.data);

export const getEvents = () =>
  axios.get(`${apiUrl}/events`).then(res => res.data);

export const getAbout = () =>
  axios.get(`${apiUrl}/about`).then(res => res.data);

export const getIdeas = () =>
  axios.get(`${apiUrl}/ideas`).then(res => res.data);

export const addIdea = payload =>
  axios.post(`${apiUrl}/addidea`, payload).then(res => res.data);

export const gscpLeaderboard = () =>
  axios.get(`${apiUrl}/gscpHackerrank`).then(res => res.data);

export const devioRegister = payload =>
  axios.post(`${apiUrl}/devio/register`, payload);
