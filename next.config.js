/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/generatemetadata",
                destination: "/login",
                permanent: false
            },
        ]
    }
}

module.exports = nextConfig
