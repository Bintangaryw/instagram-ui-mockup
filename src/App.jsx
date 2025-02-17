import Bottombar from "./components/bottombar/Bottombar";
import Navbar from "./components/navbar/Navbar";
import Postcard from "./components/post-card/Postcard";

function App() {
    return (
        <>
            <div className="flex flex-col text-sm md:text-base">
                {/* Navbar */}
                <div className="sm:hidden">
                    <Navbar />
                </div>

                {/* User stories */}
                <div></div>

                {/* Feed */}
                <div className="space-y-32">
                    <Postcard />
                    <Postcard />
                </div>

                {/* Sidebar */}
                <div></div>

                {/* Bottombar */}
                <div className="sm:hidden w-full fixed bottom-0">
                    <Bottombar />
                </div>
            </div>
        </>
    );
}

export default App;
