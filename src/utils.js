export const createPageUrl = (pageName) => {
  return `/${pageName.toLowerCase()}`;
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
