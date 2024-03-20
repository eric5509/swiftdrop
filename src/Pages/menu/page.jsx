import AddFood from "../../Components/Menu/AddFood";
import AddMenu from "../../Components/Menu/AddMenu";
import FoodCard from "../../Components/Menu/FoodCard";
import FoodMenu from "../../Components/Menu/FoodMenu";
import OptionalMenu from "../../Components/Menu/OptionalMenu";
import SideMenu from "../../Components/Menu/SideMenu";


export default function MenuPage() {
  return (
    <div>
      <AddFood /> 
      <AddMenu />
      <FoodMenu />
      <SideMenu />
      <OptionalMenu />
      <div className="grid grid-cols-4 gap-3">
        {[1, 2, 3, 4].map(() => (
          <FoodCard />
        ))}
      </div>
    </div>
  );
}
