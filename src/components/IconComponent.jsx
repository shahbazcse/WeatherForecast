// import { weatherIconMappings } from "@/lib/iconMap"

export default function IconComponent({
    weatherCode,
    x,
    className,
}) {

    const iconNameKey = x ? `${weatherCode}${x}` : weatherCode
    const iconName = "cloud"

    return (
        <div className={`relative text-white ${className}`}>
            <img
                fill
                alt={"Icon"}
                src={require(`../assets/icons/wi-${iconName}.svg`)}
                className="select-none"
            />
        </div>
    )
}