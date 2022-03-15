import { BrowserRouter, Routes, Route } from "react-router-dom";
import gameOfThrones from "./gameOfThrones";
import House from "./House";
import Houses from "./Houses";
import Member from "./Member";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        exact
                        path="/houses"
                        element={<Houses houses={gameOfThrones} />}
                    />
                    <Route
                        path="/houses/:id"
                        element={<House houses={gameOfThrones} />}
                    />
                    <Route
                        path="/houses/:houseId/:memberId"
                        element={<Member houses={gameOfThrones} />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
