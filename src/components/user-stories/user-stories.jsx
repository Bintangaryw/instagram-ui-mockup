import StoryItem from "./story-item";

const UserStories = () => {
    return (
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 px-2 py-2 ">
            {/* Pastikan StoryItem tidak ter-wrap */}
            <div className="flex space-x-2">
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
                <StoryItem />
            </div>
        </div>
    );
};

export default UserStories;
