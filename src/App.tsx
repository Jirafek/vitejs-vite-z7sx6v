import './App.css';
import {ProdutsList} from "./products-list/ProdutsList.tsx";
import {CreateProductForm} from "./products-creation/CreateProductForm.tsx";
function App() {
  return (
      <div className={"text-black overflow-y-auto"}>
        <h1 className={"text-4xl font-bold"}>Fantastik Shop!</h1>
          <CreateProductForm />
          <ProdutsList />
      </div>
  );
}

export default App;
