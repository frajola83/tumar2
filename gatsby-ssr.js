const React = require("react")

// Inject default title and basic Open Graph / Twitter meta tags using siteMetadata
exports.onRenderBody = ({ setHeadComponents }) => {
	let siteMetadata = {}
	try {
		// import siteMetadata from gatsby-config
		// use require to avoid ESM transpile issues
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const cfg = require("./gatsby-config")
		siteMetadata = cfg.siteMetadata || {}
	} catch (e) {
		// fallback
		siteMetadata = { title: "Tumar", siteUrl: "/" }
	}

	const title = siteMetadata.title || "Tumar"
	const siteUrl = siteMetadata.siteUrl || "/"

	setHeadComponents([
		React.createElement("title", { key: "site-title" }, title),
		React.createElement("meta", { key: "og:title", property: "og:title", content: title }),
		React.createElement("meta", { key: "twitter:title", name: "twitter:title", content: title }),
		React.createElement("meta", { key: "og:site_name", property: "og:site_name", content: title }),
		React.createElement("link", { key: "canonical", rel: "canonical", href: siteUrl }),
	])
}
