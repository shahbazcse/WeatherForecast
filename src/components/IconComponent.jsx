import { weatherIconMappings } from "../lib/iconMap";

export default function IconComponent({ weatherCode, x, className }) {
    if (!weatherCode) return null;

    const iconNameKey = x ? `${weatherCode}${x}` : weatherCode;
    const iconName = weatherIconMappings[iconNameKey];

    return (
        <div className={`relative text-white ${className}`}>
            <img
                alt={"Icon"}
                src={require(`../assets/icons/wi-${iconName}.svg`)}
                className="select-none"
            />
        </div>
    );
}
