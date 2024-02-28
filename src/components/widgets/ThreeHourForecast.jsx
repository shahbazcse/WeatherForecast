import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { convertToDate, formatSunTimeWithAMPM } from "../../lib/dateUtils";
import IconComponent from "../IconComponent";
import { Separator } from "../ui/separator";

const ThreeHourForecast = ({ data }) => {
    return (
        <>
            <Card className="h-fit min-h-[45rem] shrink-0">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <i>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 invert dark:invert-0"
                            >
                                <path
                                    d="M8 2V5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M16 2V5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.5 9.08984H20.5"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.6947 13.7002H15.7037"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.6947 16.7002H15.7037"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.9955 13.7002H12.0045"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M11.9955 16.7002H12.0045"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.29431 13.7002H8.30329"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8.29431 16.7002H8.30329"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </i>
                        3 Hour - Forecast
                    </CardTitle>
                </CardHeader>
                <CardContent className=" text-base font-normal md:mb-1">
                    {!data && "Loading..."}
                    {data?.list?.slice(0, 14).map((item, i) => (
                        <div key={item.dt}>
                            <div className="flex w-full flex-row items-center justify-between gap-2 last:mb-0">
                                <p className="min-w-[7rem] font-medium">
                                    {i === 0 ? (
                                        "Today"
                                    ) : (
                                        <span>
                                            {convertToDate(data.city.timezone, item.dt, "short")} -{" "}
                                            {""}
                                            {formatSunTimeWithAMPM(item.dt, data?.city.timezone)}
                                        </span>
                                    )}
                                </p>
                                <IconComponent
                                    weatherCode={item.weather[0].id}
                                    className=" h-8 w-8"
                                />
                                <div className="flex w-[60%] max-w-[4rem] flex-row gap-0 overflow-hidden">
                                    <div className="flex w-full select-none flex-row items-center justify-between gap-2 pr-2 text-sm">
                                        <p className="flex min-w-fit justify-end text-neutral-600 dark:text-neutral-400">
                                            {Math.floor(item.main.temp_min)}&deg;
                                        </p>
                                        {"-"}
                                        <p className="flex min-w-fit justify-end">
                                            {Math.floor(item.main.temp_max)}&deg;
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {i !== data?.list.length - 1 && <Separator className="mt-3" />}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </>
    );
};

export default ThreeHourForecast;
