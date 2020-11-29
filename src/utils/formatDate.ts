const formatDate = (date: Date): string => {
  const dateToFormat = new Date(date);
  return Intl.DateTimeFormat('pt-BR').format(dateToFormat);
};

export default formatDate;
