const getInitials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

const InitialAvatar = ({ name }) => (
  <div className="testimonial-initial-avatar" aria-label={name}>
    {getInitials(name)}
  </div>
);

export default InitialAvatar;
