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

// Remove alternate language hreflang links injected by gatsby-plugin-react-i18next
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents, pathname }) => {
	const filteredHeadComponents = getHeadComponents().filter(
		(node) => !(node.type === "link" && node.props && node.props.rel === "alternate" && node.props.hrefLang)
	)

	const allowedPaths = [
		/^\/$/, // home
		/^\/[a-z]{2}\/?$/, // home translations like /en/ or /es/
		/^\/produtos\/?$/,
		/^\/sobre-a-tumar\/?$/,
		/^\/contato\/?$/,
		/^\/[a-z]{2}\/produtos\/?$/,
		/^\/[a-z]{2}\/sobre-a-tumar\/?$/,
		/^\/[a-z]{2}\/contato\/?$/,
	]

	const isAllowedPage = allowedPaths.some((pattern) => pattern.test(pathname))

	const finalHeadComponents = [...filteredHeadComponents]

	if (!isAllowedPage) {
		finalHeadComponents.push(
			React.createElement("meta", {
				key: "robots-noindex",
				name: "robots",
				content: "noindex",
			})
		)
	}

	replaceHeadComponents(finalHeadComponents)
}
