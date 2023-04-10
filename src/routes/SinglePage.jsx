import { useParams } from "react-router-dom";
import NotMatch from "./NotMatch";

const SinglePage = () => {
    // console.log(useParams());

    const aboutData = [
        {
            slug: 'about-app',
            title: 'About the app',
            description:
                "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
        },
        {
            slug: 'about-developer',
            title: 'About the developer',
            description:
                'Pujan is a frontend developer looking to be the build performant and delightful experiences.',
        },
    ]

    const { slug } = useParams();
    const aboutContent = aboutData.find((item) => (item.slug == slug));
    let title = "", description = "";
    try {
        title = aboutContent.title;
        description = aboutContent.description;
    } catch (err) {
        return <NotMatch />
    }

    return (
        <div className="main_content">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default SinglePage;