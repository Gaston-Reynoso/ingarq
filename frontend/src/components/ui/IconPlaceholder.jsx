const IconPlaceholder = ({ text }) => {
  const initials = text
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('');

  return <div className="icon-placeholder">{initials}</div>;
};

export default IconPlaceholder;
