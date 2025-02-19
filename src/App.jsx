import Bottombar from "./components/bottombar/Bottombar";
import Navbar from "./components/navbar/Navbar";
import Postcard from "./components/post-card/Postcard";
import RightPanel from "./components/right-panel/RightPanel";
import Sidebar from "./components/sidebar/Sidebar";
import UserStories from "./components/user-stories/user-stories";

function App() {
    return (
        <>
            <div className="flex text-sm flex-col sm:flex-row  md:text-sm">
                {/* Navbar */}
                <div className="sm:hidden">
                    <Navbar />
                </div>

                {/* Sidebar */}
                <div className="hidden h-full sm:flex">
                    <Sidebar />
                </div>

                <div className="sm:w-[580px] sm:mx-auto">
                    {/* User stories */}
                    <div>
                        <UserStories />
                    </div>
                    {/* Feed */}
                    <div>
                        <Postcard />
                        <Postcard />
                        <Postcard />
                        <Postcard />
                        <Postcard />
                        <Postcard />
                        <Postcard />
                    </div>
                </div>

                {/* Right panel */}
                <div className="hidden absolute 2xl:left-[70%] 2xl:flex">
                    <RightPanel />
                </div>

                {/* Bottombar */}
                <div className="sm:hidden w-full fixed bottom-0">
                    <Bottombar />
                </div>
            </div>
        </>
    );
}

export default App;
