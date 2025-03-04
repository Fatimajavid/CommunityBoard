import React from "react";
import ResourceCard from "./ResourceCard";

const CommunityBoard = () => {
    return (
        <div className="CommunityBoard">
            <ResourceCard 
                title="React Docs" 
                description="Learn React from the official docs" 
                link="https://react.dev" 
                color="blue" 
                image="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg"
            />
            <ResourceCard 
                title="JavaScript Info" 
                description="Comprehensive JS guide" 
                link="https://javascript.info" 
                color="yellow" 
                image="https://cdn.freebiesupply.com/logos/large/2x/logo-javascript-logo-png-transparent.png"
            />
            <ResourceCard 
                title="Frontend Mentor" 
                description="Practice frontend challenges" 
                link="https://frontendmentor.io" 
                color="purple" 
                image="https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F1390%2Ff6c7428b-c890-4c97-a586-352a887caad6.png"
            />
            <ResourceCard 
                title="LeetCode" 
                description="Sharpen your coding skills" 
                link="https://leetcode.com" 
                color="red" 
                image="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            />
            <ResourceCard 
                title="CSS Tricks" 
                description="Tips and tricks for CSS" 
                link="https://css-tricks.com" 
                color="pink" 
                image="https://files.mastodon.social/accounts/avatars/109/513/383/818/775/271/original/1817991c31c535d0.png"
            />
            <ResourceCard 
                title="MDN Web Docs" 
                description="Comprehensive web documentation" 
                link="https://developer.mozilla.org" 
                color="" 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKv3YhvtA35R4QoWjhTKbMvP6ZdxcsdnoeaQ&s"
            />
            <ResourceCard 
                title="AI & ML Guide" 
                description="Basics of AI and ML" 
                link="https://towardsdatascience.com" 
                color="blue" 
                image="https://www.testingmind.com/wp-content/uploads/2023/01/news-AI-ML-sevices.png"
            />
            <ResourceCard 
                title="Data Structures" 
                description="Learn Data Structures" 
                link="https://geeksforgeeks.org" 
                color="green" 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/GeeksforGeeks.svg/2560px-GeeksforGeeks.svg.png"
            />
            <ResourceCard 
                title="Python for Beginners" 
                description="Python programming basics" 
                link="https://realpython.com" 
                color="yellow" 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png"
            />
            <ResourceCard 
                title="FreeCodeCamp" 
                description="Free coding tutorials" 
                link="https://freecodecamp.org" 
                color="red" 
                image="https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg"
            />
        </div>
    );
};

export default CommunityBoard;

