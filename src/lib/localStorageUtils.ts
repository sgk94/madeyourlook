export const savePreferredStyles = (styles: string[]) => {
  localStorage.setItem("preferredStyles", JSON.stringify(styles));
};

export const getPreferredStyles = (): string[] => {
  const raw = localStorage.getItem("preferredStyles");
  return raw ? JSON.parse(raw) : [];
};
