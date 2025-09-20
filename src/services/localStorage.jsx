// src/services/localStorage.js
const BOOKINGS_KEY = 'bookings';

export const getBookings = () => {
  const bookings = localStorage.getItem(BOOKINGS_KEY);
  return bookings ? JSON.parse(bookings) : [];
};

export const saveBooking = (newBooking) => {
  const bookings = getBookings();
  bookings.push(newBooking);
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
};