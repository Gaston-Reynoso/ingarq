import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  as = "button",
  ...props
}) {
  const Component = as;
  return (
    <Component className={`ui-button ${variant}`} {...props}>
      {children}
    </Component>
  );
}
