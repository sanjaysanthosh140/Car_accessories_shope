import "./Car_4D_mats.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLayerGroup, FaTh, FaColumns } from "react-icons/fa";

// Simplified premium UI: each card shows icon, title and short description.
function Car_4D_mats() {
	const navigate = useNavigate();

	const categories = [
		{
			id: "5d",
			title: "5D Mats",
			icon: <FaLayerGroup className="cat-icon" />,
			description: "Durable 5-layer mats — protection + comfort.",
			route: "/5d-mats",
			color: "#00b7ff",
		},
		{
			id: "7d",
			title: "7D Mats",
			icon: <FaTh className="cat-icon" />,
			description: "Ultra-premium 7-layer mats for maximum coverage.",
			route: "/7d-mats",
			color: "#2be57a",
		},
		{
			id: "vinyl",
			title: "Vinyl Flooring",
			icon: <FaColumns className="cat-icon" />,
			description: "Stylish vinyl flooring — sleek, easy to install.",
			route: "/vinyl-flooring",
			color: "#ff9f1c",
		},
	];

	return (
		<div className="mats-simple">
			<header className="mats-simple__header">
				<h1 className="mats-simple__title">Flooring Categories</h1>
				<p className="mats-simple__lead">Select a category to explore products.</p>
			</header>

			<div className="mats-simple__grid">
				{categories.map((c) => (
					<button
						key={c.id}
						className="mats-simple__card"
						onClick={() => navigate(c.route)}
						style={{ ["--accent"]: c.color }}
						aria-label={`Go to ${c.title}`}
					>
						<div className="mats-simple__icon">{c.icon}</div>
						<div className="mats-simple__body">
							<h3 className="mats-simple__name">{c.title}</h3>
							<p className="mats-simple__desc">{c.description}</p>
						</div>
					</button>
				))}
			</div>
		</div>
	);
}

export default Car_4D_mats;
