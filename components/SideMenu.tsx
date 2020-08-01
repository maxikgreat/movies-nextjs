import { Category } from "../types";

interface SideMenuProps {
  categories: Category[],
}

export const SideMenu = ({categories}: SideMenuProps) => (
  <>
    <h1 className="my-4">Movie App</h1>
    {categories.map(category => (
      <a
        key={category.id}
        id={category.id}
        href="#" 
        className="list-group-item"
      >{category.name}</a>
    ))}
  </>
)
