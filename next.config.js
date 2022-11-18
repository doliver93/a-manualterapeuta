module.exports = {
    experimental: {
        // fontLoaders: [
        //     { loader: "@next/font/google", options: { subsets: ["latin-ext"] } },
        // ],
        scrollRestoration: true
    },
    // exportTrailingSlash: true // fix 404 not found on page reload in prod
    trailingSlash: true, // fix 404 not found on page reload in prod
    basePath: "",
    images: {
        unoptimized: true
    }
}