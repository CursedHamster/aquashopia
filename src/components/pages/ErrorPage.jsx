import { Button } from "../Button";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page section-padding">
      <div className="container-404">
        <p className="text-404">404</p>
        <h1 className="error-404">Error 404</h1>
      </div>
      <h2>Page not found</h2>
      <p>The page you are looking for doesn't exist</p>
      <Button buttonStyle="btn--accent" to="/">
        Go back to the home page
      </Button>
    </div>
  );
}

export default ErrorPage;
