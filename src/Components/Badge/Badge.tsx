import "./badge.scss";

type BadgeProps = {
  handleClick: () => void,
  children: any;
}

export const Badge = ({ children, handleClick }: BadgeProps) => {
  return(
  <div className="badge" onClick={handleClick}>
  {children}
  </div>)
}