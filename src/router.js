import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Show from "./pages/Show";
import Index from "./pages/Index";
import Search from "./components/Search";
import Practice from "./pages/Practice";
import Create from "./pages/Create";
import Dic from "./components/Dic";
import { indexLoader, showLoader } from "./loaders";
import { createAction, updateAction, deleteAction } from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="post/:id" element={<Show />} loader={showLoader} />
        <Route path="create" action={createAction} />
        <Route path="update/:id" action={updateAction} />
        <Route path="delete/:id" action={deleteAction} />
        <Route path="search" element={<Search />} />
        <Route path="practice" element={<Practice />} />
        <Route path="make" element={<Create />} />
        <Route path="dictionary/:search" element={<Dic />} />
      </Route>
    </>
  )
);
export default router;
