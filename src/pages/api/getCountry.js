import geoip from 'geoip-lite';

export default function handler(req, res) {
    // Extract the IP address of the client
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Clean the IP if it has extra prefixes
    if (ip.substr(0, 7) === '::ffff:') {
        ip = ip.substr(7);
    }

    // Use geoip-lite to lookup country based on IP address
    const geo = geoip.lookup(ip);
    console.log(geo);

    // If country is found, send it as a response
    if (geo && geo.country) {
        res.status(200).json({ country: geo.country.toLowerCase() });
    } else {
        // If country is not found, send a default value (e.g., 'gb')
        res.status(200).json({ country: 'gb' });
    }
}