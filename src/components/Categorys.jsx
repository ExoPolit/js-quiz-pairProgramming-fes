import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import categories from "../data/CategoryData";

const Categorys = () => {
	const navigate = useNavigate();

	return (
		<div style={{ backgroundColor: "var(--main-bg)", padding: "25px" }}>
			<div className="container-lg">
				<div className="row">
					{categories.map((categories, index) => (
						<div key={index} className="col-lg-3 col-md-4 col-md-6 mb-4">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title" style={{ textAlign: "center" }}>
										{Object.keys(categories)}
									</h5>
									<Button
										variant="outline-none"
										style={{
											backgroundColor: "var(--red-bg)",
											color: "var(--font-wt)",
											fontWeight: "600",
											width: "100%",
										}}
										size="md"
										id="signout-btn"
										onClick={() =>
											navigate(`/quiz/${Object.keys(categories)}`)
										}>
										Start
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categorys;
