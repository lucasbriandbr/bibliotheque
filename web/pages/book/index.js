export default function Book() {
    return("404 error : the page you are looking for doesn't exist.")
}

export function getServerSideProps() {
    return {
        redirect: {
            destination: "/explore",
            permanent: true,
        },
    };
}